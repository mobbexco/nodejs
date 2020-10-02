const requestManager = require('../requests')
const auditKeyCheck = require('../utils/auditKeyCheck')
const searchSchema = require('../models/loyaltySearchModel')
const createSchema = require('../models/loyaltyCreateModel')
const chargeSchema = require('../models/loyaltyChargeModel')

let loyaltyModule = module.exports

loyaltyModule.create = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/create',
    method: 'POST',
    schema: createSchema
  }, body)
}

loyaltyModule.search = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/search',
    method: 'POST',
    schema: searchSchema
  }, body)
}

loyaltyModule.balance = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/balance',
    method: 'POST',
    schema: searchSchema
  }, body)
}

loyaltyModule.charge = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/points/charge',
    method: 'POST',
    schema: chargeSchema
  }, body)
}
