import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import sources from "../src/resources/sources";

chai.use(chaiAsPromised);

describe("Sources Module", () => {
  describe("Successfully handle Sources Module", () => {
    it("Should pass with total parameter as integer", () => {
      assert.ok(sources.list("code", 320));
    });

    it("Should pass with total parameter as float", () => {
      assert.ok(sources.list("code", 320.5));
    });
  });
});