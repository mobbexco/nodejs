import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import Request from "../src/requests";

const requests: Request = new Request();

chai.use(chaiAsPromised);

describe("Requests Module", () => {
  // Configuration is set in subscribers test
  describe("Requests Error", () => {
    it("Expect arguments error", () => {
      return assert.isRejected(
        requests.create({ path: "/subscriptions", method: "POST" }),
        "Expecting two arguments, one given"
      );
    });
  });
});
