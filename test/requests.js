const chai = require('chai');
const chaiPromise = require('chai-as-promised')
const assert = chai.assert;
const requests = require('../lib/requests')

chai.use(chaiPromise)

describe('Requests Module', () => {
  // Configuration is set in subscribers test
  describe('Requests Error', () => {
    it('Expect arguments error', () => {
      assert.isRejected(requests.create({path: '/subscriptions', method: 'POST'}), 'Expecting two arguments, one given')
    })
    it('Expect last argument object error', () => {
      assert.isRejected(requests.create({path: '/subscriptions', method: 'POST'}, 345), 'Expecting last argument be of type Object')

    })
  })
})
