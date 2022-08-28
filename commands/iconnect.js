const { prompt } = require('enquirer')

const { CONNECT_FIELDS, CliError } = require('../connections')

function fieldMessage(fieldConfig) {
    return fieldConfig.msg + (fieldConfig.default ? ` (default is ${fieldConfig.default})` : '')
}

PROMPT_TYPES = {
    integer: (name, fieldConfig) => {
        return {
            type: 'numeral',
            message: fieldMessage(fieldConfig),
            skip () { return skipField(this, name, fieldConfig) }
        }
    },
    numeric: (name, fieldConfig) => {
        return {
            type: 'input',
            message: fieldMessage(fieldConfig),
            skip () { return skipField(this, name, fieldConfig) }
        }
    },
    boolean: (name, fieldConfig) => {
        return {
            type: 'toggle',
            message: fieldMessage(fieldConfig),
            skip () { return skipField(this, name, fieldConfig) }
        }
    },
    char: (name, fieldConfig) => {
        return {
            type: 'input',
            message: fieldMessage(fieldConfig),
            skip () { return skipField(this, name, fieldConfig) }
        }
    }
}

function skipField (enq, name, fieldConfig) {
    if (!fieldConfig.when) return false
    const val = enq.enquirer.answers[fieldConfig.when]
    return typeof val === 'undefined' || val === 'false' || !val
}

function promptForField (name, fieldConfig) {
    if (!fieldConfig.type || fieldConfig.type === 'input') {
        return {
            type: 'input',
            name,
            message: fieldMessage(fieldConfig),
            skip () { return skipField(this, name, fieldConfig) }
        }
    }
    return PROMPT_TYPES[fieldConfig.type](name, fieldConfig)
}

async function interactiveConnect (name) {
    return prompt([
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
            choices: Object.keys(CONNECT_FIELDS).filter(n => n !== 'all')
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
        const configAnswers = await prompt(configQuestions)
        return Object.assign({}, nameAndType, configAnswers)
    })
}

module.exports = { interactiveConnect }
