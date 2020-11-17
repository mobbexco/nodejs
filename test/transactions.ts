import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import transactions from "../src/resources/transactions";

chai.use(chaiAsPromised);

describe("Transactions Module", () => {
  describe("Successfully handle Tranasactions Module", () => {
    it("Should get all the transactions", () => {
      assert.ok(transactions.get("mi_referencia_0101e"));
    });

    it("Should search the transaction with POST method", () => {
      assert.ok(
        transactions.search({
          page: 1,
          limit: 15,
          currency: "ARS",
        })
      );
    });

    it("Should search the transaction with POST method and no limit", () => {
      assert.ok(
        transactions.search({
          page: 1,
          currency: "ARS",
        })
      );
    });

    it("Should search the transaction with POST method, no limit and no page", () => {
      assert.ok(
        transactions.search({
          currency: "ARS",
        })
      );
    });

    it("Should search the transaction with GET method", () => {
      assert.ok(
        transactions.search(
          {
            page: 1,
            limit: 15,
            currency: "ARS",
          },
          "get"
        )
      );
    });

    it("Should refund", () => {
      assert.ok(transactions.refund("ID"));
    });

    it("Should partial refund", () => {
      assert.ok(transactions.partialRefund("ID", 100));
    });

    it("Should capture the operation", () => {
      assert.ok(transactions.capture("Id", 200));
    });
  });
});
