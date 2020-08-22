const requestManager = require('../requests')
const schema = require('../models/subscriberModel')

let subscriber = module.exports = {}

subscriber.create = (id, body) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'POST',
    schema: schema
  }, body)
}

subscriber.all = (id) => {
  check(id)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: 'GET'
  })
}

subscriber.find = (id, sid) => {
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'GET'
  })
}

subscriber.edit = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: 'POST'
  }, body)
}

subscriber.suspend = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
    method: 'GET'
  })
}

subscriber.activate = (id, sid) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
    method: 'GET'
  })
}

subscriber.reschedule = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
    method: 'POST'
  }, body)
}

subscriber.move = (id, sid, body) => {
  check(id)
  check(sid)
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
    method: 'POST'
  }, body)
}

function check(param) {
  if (typeof param !== 'string') {
    if (typeof param === 'undefined') {
      throw new TypeError('Missing argument')
    }
    throw new TypeError('Wrong type argument. ' + param + ' must be string, is ' + typeof param)
  }
}
