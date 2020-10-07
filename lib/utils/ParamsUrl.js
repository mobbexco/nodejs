const validation = require('../validation')

function objectToUrl(schema, object) {
  let errors
  errors = validation.validate(schema, object)
  if (errors.length > 0) {
    throw new Error(validation.message(errors))
  }

  let url = ""
  for (let key in object) {
    /* istanbul ignore if */
    if (!object.hasOwnProperty(key)) {
      continue
    }
    if (url !== "") {
      url += "&"
    }
    url += key + "=" + encodeURIComponent(object[key])
  }
  return url
}

module.exports = objectToUrl
