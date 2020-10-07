const requestManager = require('../requests')
const schema = require('../models/paymentCodeModel')
const objectToUrl = require('../utils/ParamsUrl')
const check = require('../utils/parametersCheck')

let paymentCode = module.exports

paymentCode.create = (code, object) => {
  check(code)
  const params = objectToUrl(schema, object)
  return requestManager.create({
    path: `/payment_code/gen/${code}?${params}`,
    method: "GET"
  })
}
