import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import paymentCode from "../src/resources/paymentCode";
import configurations from "../src/configurations";

chai.use(chaiAsPromised);

before(() => {
  configurations.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
});

describe("Payments Code Module", () => {
  describe("Error with Module", () => {
    it("Expect error with schema missing argument", () => {
      return assert.throws(
        paymentCode.create.bind(paymentCode, "Code", {
          reference: "reference",
          expiration: "01-12-2020",
        }),
        `Failing object validation:\nThe 'total' field is required.\n`
      );
    });

    it("Expect error with schema expiration pattern", () => {
      return assert.throws(
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
      return assert.isFulfilled(
        paymentCode.create("code", {
          reference: "reference",
          total: 3230,
          expiration: "01-12-2020",
        })
      );
    });
  });
});
