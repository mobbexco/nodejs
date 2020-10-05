const chai = require('chai');
const chaiPromise = require('chai-as-promised')
const assert = chai.assert;
const devConnect = require('../lib/resources/devConnect')

chai.use(chaiPromise)

describe('Dev Connect Moduke', () => {
  describe('Succesfully handle Dev Connections', () => {
    it('Should create a dev connection', () => {
      assert.isFulfilled(devConnect.connect({
        return_url: "https://example.com"
      }))
    })

    it('Should get the credentials', () => {
      assert.isFulfilled(devConnect.get('oZWpdzX7y'))
    })
  })
})
