import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
const devConnect = require("../src/resources/devConnect");

chai.use(chaiAsPromised);

describe("Dev Connect Moduke", () => {
  describe("Succesfully handle Dev Connections", () => {
    it("Should create a dev connection", () => {
      assert.isFulfilled(
        devConnect.create({
          return_url: "https://example.com",
        })
      );
    });

    it("Should get the credentials", () => {
      assert.isFulfilled(devConnect.get("oZWpdzX7y"));
    });
  });
});
