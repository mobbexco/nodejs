const requestManager = require('../requests')
const check = require('../utils/parametersCheck')
const objectToUrl = require('../utils/ParamsUrl')
const getSchema = require('../models/transactionsSearchGet')
const postSchema = require('../models/transactionsSearchPost')

let transactionsModule = module.exports

transactionsModule.search = (method, object) => {
  check(method)
  if (method === 'get') {
    const params = objectToUrl(getSchema, object)
    return requestManager.create({
      path: `/operations?${params}`,
      method: 'GET'
    })
  }
  else if (method === 'post') {
    let path = `/operations`
    if (object.page) {
      if (object.limit) {
        path += `?page=${object.page}&limit=${object.limit}`
      }
      else {
        path += `?page=${object.page}`
      }
    }

    return requestManager.create({
      path: path,
      method: 'POST',
      schema: postSchema
    }, object)
  }

  else {
    throw new Error("First parameter must be 'get' or 'post'")
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
