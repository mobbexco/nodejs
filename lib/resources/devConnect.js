const requestManager = require('../requests')
const schema = require('../models/devConnectModel')
const check = require('../utils/parametersCheck')

let devConnectModule = module.exports

devConnectModule.connect = (body) => {
  return requestManager.create({
    path: `/developer/connect`,
    method: 'POST',
    schema: schema
  }, body)
}

devConnectModule.get = (id) => {
  check(id)
  return requestManager.create({
    path: `/developer/connect/${id}/credentials`,
    method: 'GET'
  })
}
