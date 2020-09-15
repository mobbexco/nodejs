const requestManager = require('../requests')
const schema = require('../models/paymentOrderModel')

let paymenOrderModule = module.exports

paymenOrderModule.create = (body) => {
  return requestManager.create({
    path: `/payment_order`,
    method: 'POST',
    schema: schema
  }, body)
}
