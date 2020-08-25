const schema = require('../models/subscriptionModel')
const request = require('../requests')
const check = require('../utils/parametersCheck')

let subscriptionsModel = module.exports

subscriptionsModel.create = (body) => {
  return request.create({
    path: '/subscriptions',
    method: 'POST',
    schema: schema
  }, body)
}

subscriptionsModel.edit = (id, body) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'POST'
  }, body)
}

subscriptionsModel.all = () => {
  return request.create({
    path: '/subscriptions',
    method: 'GET'
  })
}

subscriptionsModel.find = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'GET'
  })
}

subscriptionsModel.activate = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/activate`,
    method: 'GET'
  })
}

subscriptionsModel.delete = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/delete`,
    method: 'GET'
  })
}
