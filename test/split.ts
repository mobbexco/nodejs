import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import { splitCheck } from "../src/utils/splitCheck";
import checkout from "../src/resources/checkout";
import configurations from "../src/configurations";

chai.use(chaiAsPromised);

before(() => {
  configurations.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
});

describe("Split", () => {
  describe("Split Check Error", () => {
    it("Expect error splits total less than checkout toal", () => {
      return assert.throws(
        splitCheck.bind(splitCheck, {
          total: 1000,
          currency: "ars",
          reference: "12345",
          description: "description",
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
      return assert.throws(
        splitCheck.bind(splitCheck, {
          total: 1000,
          currency: "ars",
          reference: "12345",
          description: "description",
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
    it("Should make request to and pass the Split Check and Post the Request", () => {
      return assert.isRejected(
        checkout.split({
          total: 1000,
          currency: "ars",
          reference: "12345",
          description: "description",
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
        }),
        "Request failed with status code 401"
      );
    });

    it("Should correctly make request to release a Split", () => {
      return assert.isRejected(
        checkout.release("123123123"),
        "Request failed with status code 401"
      );
    });
  });
});
