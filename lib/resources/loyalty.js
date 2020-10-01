const requestManager = require('../requests')
const auditKeyCheck = require('../utils/auditKeyCheck')
let loyaltyModule = module.exports

loyaltyModule.create = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/create',
    method: 'POST',
  }, body)
}

loyaltyModule.search = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/search',
    method: 'POST',
  }, body)
}

loyaltyModule.balance = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/accounts/balance',
    method: 'POST'
  }, body)
}

loyaltyModule.charge = (body) => {
  auditKeyCheck()
  return requestManager.create({
    path: '/loyalty/points/charge',
    method: 'POST',
  }, body)
}
