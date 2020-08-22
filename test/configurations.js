const chai = require('chai');
const assert = chai.assert;
const configuration = require('../lib/configurations')

describe('Configurations Module', () => {
  let apiKey = 'API KEY';
  let accessToken = 'ACCESS TOKEN';

  describe('Configurations Errors', () => {
    it('Expect configuration error', () => {
      assert.throws(configuration.configure, 'You must provide an Object with the Api Key and Access Token');
    });

    it('Expect empty constructor', () => {
      assert.throws(configuration.configure.bind(configuration, {}), 'You must provide an Api Key and Access Token');
    });

    it('Expect error on Api Key', () => {
      assert.throws(configuration.configure.bind(configuration, {
        accessToken: accessToken
      }), 'You must provide an Api Key');
    });

    it('Expect error on Access Token', () => {
      assert.throws(configuration.configure.bind(configuration, {
        apiKey: apiKey
      }), 'You must provide an Access Token')
    });

    describe('Configuration Success', () => {
      it('Check Api Key and Access Token are set', () => {
        configuration.configure({
          apiKey: apiKey,
          accessToken: accessToken
        });

        assert.equal(configuration.getApiKey(), apiKey);
        assert.equal(configuration.getAccessToken(), accessToken)
      });

      it('Expect cannot change values error', () => {
        assert.throws(configuration.configure.bind(configuration, {
          apiKey: apiKey,
          accessToken: accessToken
        }), 'You cannot change Api Key or Access Token because are already set');
      });
    });
  });
});
