const Enquirer = require('enquirer')
const enquirer = new Enquirer()
const chalk = require("chalk")

const { CONNECT_FIELDS, SPECIAL_FIELD_GROUPS, CliError } = require('../connections')

function fieldMessage(fieldConfig) {
    return fieldConfig.msg + (fieldConfig.default ? chalk.greenBright(` (default is ${fieldConfig.default})`) : '')
}

PROMPT_TYPES = {
    password: (name, fieldConfig) => {
        return {
            type: 'password',
            name,
            message: fieldMessage(fieldConfig)
        }
    },
    integer: (name, fieldConfig) => {
        return {
            type: 'numeral',
            message: fieldMessage(fieldConfig)
        }
    },
    numeric: (name, fieldConfig) => {
        return {
            type: 'input',
            message: fieldMessage(fieldConfig)
        }
    },
    boolean: (name, fieldConfig) => {
        return {
            type: 'toggle',
            enabled: true,
            disabled: false,
            message: fieldMessage(fieldConfig)
        }
    },
    char: (name, fieldConfig) => {
        return {
            type: 'input',
            message: fieldMessage(fieldConfig)
        }
    }
}

function promptForField (name, fieldConfig) {
    if (!fieldConfig.type || fieldConfig.type === 'input') {
        return {
            type: 'input',
            name,
            message: fieldMessage(fieldConfig)
        }
    }
    return PROMPT_TYPES[fieldConfig.type](name, fieldConfig)
}

async function interactiveConnect (name) {
    return enquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Connection name:',
            skip: () => name && name.length > 0
        },
        {
            name: 'type',
            type: 'select',
            message: 'Connect to:',
            choices: Object.keys(CONNECT_FIELDS).filter(n => !SPECIAL_FIELD_GROUPS.includes(n))
        }
    ]).then(async (nameAndType) => {
        if (!nameAndType.type) throw new CliError(`no connection type provided`)
        const configQuestions = []
        const configGroups = [CONNECT_FIELDS.all, CONNECT_FIELDS[nameAndType.type]]
        configGroups.forEach(fieldConfigs => {
            Object.keys(fieldConfigs).forEach(f => {
                configQuestions.push(promptForField(f, fieldConfigs[f]))
            })
        })
        const configAnswers = await enquirer.prompt(configQuestions)
        const enableRedis = await enquirer.prompt([{
            name: 'redis',
            message: `Enable redis caching ${chalk.greenBright('(highly recommended)')} ?`,
            type: 'toggle',
            initial: true
        }])
        let redisAnswers = {}
        if (enableRedis.redis) {
            const redisFields = CONNECT_FIELDS.redis
            const redisQuestions = []
            Object.keys(redisFields).forEach(f => {
                redisQuestions.push(promptForField(f, redisFields[f]))
            })
            redisAnswers = await enquirer.prompt(redisQuestions)
        }
        const enableEncryption = await enquirer.prompt([{
            name: 'encryption',
            type: 'toggle',
            message: 'Enable encryption?'
        }])
        let cryptAnswers = {}
        if (enableEncryption.encryption) {
            const encFields = CONNECT_FIELDS.encryption
            const cryptQuestions = []
            Object.keys(encFields).forEach(f => {
                cryptQuestions.push(promptForField(f, encFields[f]))
            })
            cryptAnswers = await enquirer.prompt(cryptQuestions)
        }
        return Object.assign({}, nameAndType, configAnswers, redisAnswers, cryptAnswers)
    })
}

module.exports = { interactiveConnect }
