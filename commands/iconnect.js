const Enquirer = require('enquirer');
const enquirer = new Enquirer();

const { CONNECT_FIELDS, SPECIAL_FIELD_GROUPS, CliError } = require('../connections')

function fieldMessage(fieldConfig) {
    return fieldConfig.msg + (fieldConfig.default ? ` (default is ${fieldConfig.default})` : '')
}

PROMPT_TYPES = {
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
        return Object.assign({}, nameAndType, configAnswers, cryptAnswers)
    })
}

module.exports = { interactiveConnect }
