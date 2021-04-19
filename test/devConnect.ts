import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import devConnect from "../src/resources/devConnect";
import configurations from "../src/configurations";

chai.use(chaiAsPromised);

before(() => {
  configurations.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
});

describe("Dev Connect Moduke", () => {
  describe("Succesfully handle Dev Connections", () => {
    it("Should create a dev connection", () => {
      return assert.isFulfilled(
        devConnect.create({
          return_url: "https://example.com",
        })
      );
    });

    it("Should get the credentials", () => {
      return assert.isFulfilled(devConnect.get("oZWpdzX7y"));
    });
  });
});
