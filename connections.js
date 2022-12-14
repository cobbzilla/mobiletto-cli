const Conf = require('conf')
const chalk = require("chalk")
const {
    mobiletto, closeRedis,
    MobilettoNotFoundError, MobilettoError
} = require("mobiletto")

const schema = {}
const registry = new Conf({ schema })

// adapted from https://stackoverflow.com/a/27724419
function CliError (message, err) {
    this.message = chalk.redBright(`${message}${err ? `: ${err}` : ''}`)
    this.err = err
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
        Error.captureStackTrace(this, TypeError)
    } else {
        this.stack = (new Error(this.message)).stack
    }
}


// noinspection EqualityComparisonWithCoercionJS
const FIELD_TYPE_VALIDATORS = {
    password: val => val,
    boolean: (val) => {
        if (val === 'true' || val === true) return true
        if (val === 'false' || val === false) return false
        throw new CliError(`invalid boolean value, expected true or false: ${val}`)
    },
    integer: (val) => {
        if (!val || !/\d+/.test(val)) throw new CliError(`invalid integer: ${val}`)
        return +val
    },
    numeric: (val) => {
        return typeof val !== 'undefined' && val !== null ? +val : null
    },
    char: (val) => {
        if (!val || val.length !== 1) throw new CliError(`invalid character (expected a single char): ${val}`)
        return val
    }
}

const CONNECT_FIELDS = {
    all: {
        readOnly: { msg: 'Mount as read-only?', type: 'boolean', default: false }
    },
    redis: {
        redisHost: { msg: 'Redis host', default: '127.0.0.1' },
        redisPort: { msg: 'Redis port', type: 'integer', default: 6379 },
        redisPrefix: { msg: 'Redis key prefix', default: '__mobiletto_' }
    },
    encryption: {
        encryptionKey: { msg: 'Encryption key', type: 'password' },
        encryptionIV: { msg: 'Encryption IV', default: null },
        encryptionAlgo: { msg: 'Encryption algorithm', default: 'aes-256-cbc' },
    },
    local: {
        key: { msg: 'Base directory' },
        fileMode: { msg: 'File creation mode', type: 'numeric', default: '0o0600' },
        dirMode: { msg: 'Directory creation mode', type: 'numeric', default: '0o0700' }
    },
    s3: {
        key: { msg: 'AWS Access Key', type: 'password' },
        secret: { msg: 'AWS Secret Key', type: 'password' },
        bucket: { msg: 'Bucket name' },
        region: { msg: 'AWS Region', default: 'us-east-1' },
        prefix: { msg: 'Prefix', default: ''},
        delimiter: { msg: 'Delimiter', default: '/', type: 'char' }
    },
    b2: {
        key: { msg: 'Key ID', type: 'password' },
        secret: { msg: 'Application Key', type: 'password' },
        bucket: { msg: 'Bucket ID (not name)' },
        prefix: { msg: 'Prefix', default: ''},
        partSize: { msg: 'Part size ' + chalk.greenBright('empty to autodetect'), default: null },
        delimiter: { msg: 'Delimiter', default: '/', type: 'char' }
    }
}
const SPECIAL_FIELD_GROUPS =  ['all', 'redis', 'encryption']

const CONNECTIONS = {}

const registerConnection = async (name, config, force) => {
    if (!force && registry.get(name, null) !== null) {
        throw new CliError(`registerConnection: name '${name}' is already registered`)
    }
    try {
        CONNECTIONS[name] = await mobiletto(config.type, config.key, config.secret, config.opts, config.encryption)
    } catch (e) {
        throw new CliError(`registerConnection: error testing connection: ${JSON.stringify(e)}`)
    }
    registry.set(name, config)
}

const connect = async (name) => {
    if (CONNECTIONS[name]) return CONNECTIONS[name]
    const config = registry.get(name, null)
    if (!config) throw new CliError(`connect: no connection named '${name}' is defined`)
    const encryption = config.encryption
        ? {
            key: config.encryptionKey,
            iv: config.encryptionIV,
            algo: config.encryptionAlgo,
        }
        : null
    if (encryption) {
        ['iv', 'algo'].forEach(cfg => {
            if (typeof encryption[cfg] !== 'undefined' && encryption[cfg].length === 0) { delete encryption[cfg] }
        })
    }
    CONNECTIONS[name] = await mobiletto(config.type, config.key, config.secret, config.opts, encryption)
    return CONNECTIONS[name]
}

const connectionNames = () => {
    const names = []
    for (const entry of registry) {
        names.push(entry[0])
    }
    return names
}

const getConnection = (name) => {
    const config = registry.get(name)
    if (config) return config
    throw new CliError(`getConnection: connection named '${name}' does not exist`)
}

const removeConnection = (name, force) => {
    if (!force &&!registry.has(name)) throw new CliError(`connection does not exist: ${name}`)
    registry.delete(name)
}

const removeAllConnections = () => registry.clear()

const handleCliError = (e, program) => {
    if (e instanceof CliError) {
        program.error(e.message)
    } else if (e instanceof MobilettoNotFoundError) {
        program.error(chalk.redBright('Not Found: ') + chalk.whiteBright(e.message))
    } else if (e instanceof MobilettoError) {
        program.error(chalk.redBright('MobilettoError: ') + chalk.whiteBright(e.message))
    } else {
        throw e
    }
}

const mountAndPath = (path) => {
    const slash = path.indexOf('/')
    const mobi = slash === -1
        ? path
        : slash === path.length -1
            ? path.substring(0, path.length - 1)
            : path.substring(0, slash)
    getConnection(mobi) // ensure connection is value
    const p = path.substring(mobi.length + 1)
    return { mount: mobi, path: p }
}

const cleanup = async () => await closeRedis().then(
    () => {},
    (e) => { console.warn(`cleanup: error closing redis: ${e}`)}
)

module.exports = {
    CONNECT_FIELDS, FIELD_TYPE_VALIDATORS, SPECIAL_FIELD_GROUPS,
    registerConnection, getConnection, cleanup,
    removeConnection, removeAllConnections,
    connect, connectionNames, mountAndPath,
    CliError, handleCliError
}
