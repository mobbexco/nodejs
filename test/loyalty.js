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
  })
  //Other testing
})
