const requestManager = require('../requests')
const schema = require('../models/subscriberModel')
const check = require('../utils/parametersCheck')

let subscribersModule = module.exports

subscribersModule.create = (id, body) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'POST',
    schema: schema
  }, body)
}

subscribersModule.all = (id) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'GET'
  })
}

subscribersModule.find = (id, sid) => {
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'GET'
  })
}

subscribersModule.edit = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'POST'
  }, body)
}

subscribersModule.suspend = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
    method: 'GET'
  })
}

subscribersModule.activate = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
    method: 'GET'
  })
}

subscribersModule.reschedule = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
    method: 'POST'
  }, body)
}

subscribersModule.move = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
    method: 'POST'
  }, body)
}
