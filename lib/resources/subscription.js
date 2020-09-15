const schema = require('../models/subscriptionModel')
const request = require('../requests')
const check = require('../utils/parametersCheck')

let subscriptionsModule = module.exports

subscriptionsModule.create = (body) => {
  return request.create({
    path: '/subscriptions',
    method: 'POST',
    schema: schema
  }, body)
}

subscriptionsModule.edit = (id, body) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'POST'
  }, body)
}

subscriptionsModule.all = () => {
  return request.create({
    path: '/subscriptions',
    method: 'GET'
  })
}

subscriptionsModule.find = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}`,
    method: 'GET'
  })
}

subscriptionsModule.activate = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/activate`,
    method: 'GET'
  })
}

subscriptionsModule.delete = (id) => {
  check(id)
  return request.create({
    path: `/subscriptions/${id}/action/delete`,
    method: 'GET'
  })
}
