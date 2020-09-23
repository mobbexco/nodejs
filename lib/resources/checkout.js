const requestManager = require('../requests')
const schema = require('../models/checkoutModel')
const splitCheck = require('../utils/splitCheck')

let checkoutModule = module.exports

checkoutModule.create = (body) => {
  return requestManager.create({
    path: `/checkout`,
    method: 'POST',
    schema: schema
  }, body)
}

checkoutModule.split = (body) => {
  splitCheck(body)
  return requestManager.create({
    path: `/checkout`,
    method: 'POST',
    schema: schema
  }, body)
}
