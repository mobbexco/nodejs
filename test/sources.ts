import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
const sources = require("../src/resources/sources");

chai.use(chaiAsPromised);

describe("Sources Module", () => {
  describe("Error with Sources Module", () => {
    it("Expect error with code Missing argument", () => {
      assert.throws(sources.list.bind(sources, "345.3"), "Missing argument");
    });
  });

  describe("Successfully handle Sources Module", () => {
    it("Should pass with total parameter as integer", () => {
      assert.ok(sources.list("code", 320));
    });

    it("Should pass with total parameter as float", () => {
      assert.ok(sources.list("code", 320.5));
    });
  });
});
