const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)

function validate(schema, data) {
    return ajv.validate(schema, data)
}

module.exports = {
    validate
}