const requestManager = require('../requests')
const schema = require('../models/checkoutModel')

let checkoutModel = module.exports

checkoutModel.create = (body) => {
  return requestManager.create({
    path: `/checkout`,
    method: `POST`,
    schema: schema
  }, body)
}
