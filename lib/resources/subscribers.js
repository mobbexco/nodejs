const requestManager = require('../requests')
const schema = require('../models/subscriberModel')
const check = require('../utils/parametersCheck')

let subscriberModule = module.exports = {}

subscriberModule.create = (id, body) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'POST',
    schema: schema
  }, body)
}

subscriberModule.all = (id) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'GET'
  })
}

subscriberModule.find = (id, sid) => {
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'GET'
  })
}

subscriberModule.edit = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'POST'
  }, body)
}

subscriberModule.suspend = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
    method: 'GET'
  })
}

subscriberModule.activate = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
    method: 'GET'
  })
}

subscriberModule.reschedule = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
    method: 'POST'
  }, body)
}

subscriberModule.move = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
    method: 'POST'
  }, body)
}
