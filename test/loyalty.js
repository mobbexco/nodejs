const chai = require('chai');
const chaiPromise = require('chai-as-promised')
const assert = chai.assert;
const loyalty = require('../lib/resources/loyalty')
const auditKeyCheck = require('../lib/utils/auditKeyCheck')
const configuration = require('../lib/configurations')

chai.use(chaiPromise)

describe('Loyalty Module', () => {

  describe('Error with Audit Key', () => {

    it('Should expect Error getting Audit Key', () => {
      assert.throws(auditKeyCheck, 'You must set an Audit Key')
    })
  })

  describe('Successfully handle Loyalty Module', () => {

    it('Should get the audit key', () => {
      configuration.setAuditKey('audit-key')
      assert.equal(configuration.getAuditKey(), 'audit-key')
    })

    it('Should create a new Loyalty Account', () => {
      assert.isFulfilled(loyalty.create({
        identification: '12123123',
        email: 'juanperez@email.com',
        credential: 'a1b2c3d4',
        tax_id: '30121231234',
      }))
    })

    it('Should search a Loyalty Account', () => {
      assert.isFulfilled(loyalty.search({
        reference: '12123123'
      }))
    })

    it('Should charge points', () => {
      assert.isFulfilled(loyalty.charge({
        credential: 'a1b2c3d4',
        tax_id: '30121231234',
        points: 32,
        reference: 'pointscharge1'
      }))
    })

    it('Should seach the account balance', () => {
      assert.isFulfilled(loyalty.balance({
        credential: 'a1b2c3d4'
      }))
    })
  })
  //Other testing
})