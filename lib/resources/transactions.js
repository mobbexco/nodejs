const requestManager = require('../requests')
const check = require('../utils/parametersCheck')
const objectToUrl = require('../utils/ParamsUrl')
const getSchema = require('../models/transactionsSearchGet')
const postSchema = require('../models/transactionsSearchPost')

let transactionsModule = module.exports

transactionsModule.get = (reference) => {
  check(reference)
  return requestManager.create({
    path: `/transactions/coupons/${reference}`,
    method: 'GET',
    transactions: true
  })
}

/*transactionsModule.status = (id) => {
  return requestManager.create({
    path: `/transactions/coupon/status`,
    method: 'POST',
    transactions: true
  }, {id: id})
}*/

transactionsModule.search = (object, ...args) => {
  let method
  if (args.length === 1) {
    method = args[0]
  }

  if (method === 'get') {
    const params = objectToUrl(getSchema, object)
    return requestManager.create({
      path: `/operations?${params}`,
      method: 'GET'
    })
  }

  else {
    let path = `/operations`
    if (object.page) {
      path += ((object.limit) ? `?page=${object.page}&limit=${object.limit}` : `?page=${object.page}`)
    }
    return requestManager.create({
      path: path,
      method: 'POST',
      schema: postSchema
    }, object)
  }
}

transactionsModule.refund = (id) => {
  check(id)
  return requestManager.create({
    path: `/operations/${id}/refund`,
    method: 'GET'
  })
}

transactionsModule.partialRefund = (id, total) => {
  return requestManager.create({
    path: `/operations/${id}/refund`,
    method: 'POST'
  }, {total: total})
}

transactionsModule.capture =  (id, total) => {
  return requestManager.create({
    path: `/operations/${id}/capture`,
    method: 'POST'
  }, {total: total})
}
