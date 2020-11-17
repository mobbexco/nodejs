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
        "Failing object validation: should have required property 'total'"
      );
    });

    it("Expect error with schema expiration pattern", () => {
      assert.throws(
        paymentCode.create.bind(paymentCode, "Code", {
          reference: "reference",
          total: 230,
          expiration: "01/12/2020",
        }),
        'Failing object validation: .expiration: should match pattern "^(?:(?:31(-)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$"'
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
