import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import { splitCheck } from "../src/utils/splitCheck";
const checkout = require("../src/resources/checkout");

chai.use(chaiAsPromised);

describe("Split", () => {
  describe("Split Check Error", () => {
    it("Expect error splits total less than checkout toal", () => {
      assert.throws(
        splitCheck.bind(splitCheck, {
          total: 1000,
          currency: "ars",
          reference: "12345",
          split: [
            {
              tax_id: "30121231235",
              total: 100,
              reference: "pago_1",
              fee: 100,
            },
            {
              tax_id: "33213213216",
              total: 201,
              reference: "pago_2",
              fee: 80,
            },
          ],
        }),
        `The sum of the splits total is less than the checkout total. Is $301, should be $1000`
      );
    });

    it("Expect error splits total greater than checkout toal", () => {
      assert.throws(
        splitCheck.bind(splitCheck, {
          total: 1000,
          currency: "ars",
          reference: "12345",
          split: [
            {
              tax_id: "30121231235",
              total: 900,
              reference: "pago_1",
              fee: 100,
            },
            {
              tax_id: "33213213216",
              total: 200,
              reference: "pago_2",
              fee: 80,
            },
          ],
        }),
        `The sum of the splits total is greater than the checkout total. Is $1100, should be $1000`
      );
    });
  });

  describe("Split Pass", () => {
    it("Should Pass the Split Check and Post the Request", () => {
      assert.isFulfilled(
        checkout.split({
          total: 1000,
          currency: "ars",
          reference: "12345",
          split: [
            {
              tax_id: "30121231235",
              total: 900,
              reference: "pago_1",
              fee: 100,
            },
            {
              tax_id: "33213213216",
              total: 100,
              reference: "pago_2",
              fee: 80,
            },
          ],
        })
      );
    });

    it("Should correctly release a Split", () => {
      assert.isFulfilled(checkout.release("123123123"));
    });
  });
});
