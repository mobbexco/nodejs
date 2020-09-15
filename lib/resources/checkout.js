const requestManager = require('../requests')
const schema = require('../models/checkoutModel')

let checkoutModule = module.exports

checkoutModule.create = (body) => {
  return requestManager.create({
    path: `/checkout`,
    method: 'POST',
    schema: schema
  }, body)
}
