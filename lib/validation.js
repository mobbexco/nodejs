const Ajv = require('ajv')

let validationModule = module.exports = {
  ajv: new Ajv({
    allErrors: true,
    removeAdditional: false,
    coerceTypes: false
  })
}

validationModule.validate = function(schema, data) {
  let validate = this.ajv.compile(schema)
  let valid = validate(data)
  let validationErrors = []

  if (!valid) {
    validate.errors.forEach(error => {
      validationErrors.push(error)
    })
  }
  return validationErrors
}

validationModule.message = (validationErrors) => {
  let message = 'Failing object validation:'
  validationErrors.forEach(error => {
    if (error.keyword === 'required') {
      message += ` ${error.message}.`
    }
    else message += ` ${error.dataPath}: ${error.message}.`
  })
  return message
}
