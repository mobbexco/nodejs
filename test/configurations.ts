import { assert } from "chai";
import configurations from "../src/configurations";

describe("Configurations Module", () => {
  const apiKey = "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj";
  const accessToken = "d31f0721-2f85-44e7-bcc6-15e19d1a53cc";

  describe("Configurations Errors", () => {
    describe("Configuration Success", () => {
      // Configuration is set in subscriber test
      it("Check Api Key and Access Token are set", () => {
        assert.equal(configurations.getApiKey(), apiKey);
        assert.equal(configurations.getAccessToken(), accessToken);
      });
    });
  });
});
