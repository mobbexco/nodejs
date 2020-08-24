const schema = require('../models/subscriptionModel')
const request = require('../requests')
const check = require('../utils/parametersCheck')

let subscriptionModel = module.exports = {}

subscriptionModel.create = (body) => {
  return request.create({
    path: '/subscriptions',
    method: 'POST',
    schema: schema
  }, body)
}

subscriptionModel.edit = (id, body) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'POST'
  }, body)
}

subscriptionModel.all = () => {
  return request.create({
    path: '/subscriptions',
    method: 'GET'
  })
}

subscriptionModel.find = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'GET'
  })
}

subscriptionModel.activate = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/activate`,
    method: 'GET'
  })
}

subscriptionModel.delete = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/delete`,
    method: 'GET'
  })
}
