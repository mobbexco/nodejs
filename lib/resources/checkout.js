const requestManager = require('../requests')
const schema = require('../models/checkoutModel')
const walletSchema = require('../models/walletModel')
const processSchema = require('../models/processSchema')
const splitCheck = require('../utils/splitCheck')

let checkoutModule = module.exports

checkoutModule.create = (body) => {
  if (body.wallet) {
    return requestManager.create({
      path: `/checkout`,
      method: 'POST',
      schema: walletSchema,
      private: true
    }, body)
  }

  else {
    return requestManager.create({
      path: `/checkout`,
      method: 'POST',
      schema: schema,
    }, body)
  }
}

checkoutModule.split = (body) => {
  splitCheck(body)
  return requestManager.create({
    path: `/checkout`,
    method: 'POST',
    schema: schema
  }, body)
}

checkoutModule.release = (id) => {
  return requestManager.create({
    path: `/operations/${id}/release`,
    method: 'GET'
  })
}

checkoutModule.process = (intent, body) => {
  return requestManager.create({
    path: `/operations/${intent}`,
    method: 'POST',
    schema: processSchema,
    public: true
  }, body)
}
