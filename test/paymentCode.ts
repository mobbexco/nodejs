import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import paymentCode from "../src/resources/paymentCode";

chai.use(chaiAsPromised);

describe("Payments Code Module", () => {
  describe("Error with Module", () => {
    it("Expect error with schema missing argument", () => {
      assert.throws(
        paymentCode.create.bind(paymentCode, "Code", {
          reference: "reference",
          expiration: "01-12-2020",
        }),
        `Failing object validation:\nThe 'total' field is required.\n`
      );
    });

    it("Expect error with schema expiration pattern", () => {
      assert.throws(
        paymentCode.create.bind(paymentCode, "Code", {
          reference: "reference",
          total: 230,
          expiration: "01/12/2020",
        }),
        `Failing object validation:\nThe 'expiration' field fails to match the required pattern.\n`
      );
    });
  });

  describe("Successfully handle Payments Code", () => {
    it("Should create a Payment Code", () => {
      assert.isFulfilled(
        paymentCode.create("code", {
          reference: "reference",
          total: 3230,
          expiration: "01-12-2020",
        })
      );
    });
  });
});
