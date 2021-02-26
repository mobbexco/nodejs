import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import subscription from "../src/resources/subscription";

chai.use(chaiAsPromised);

describe("Subscription Module", () => {
  const id = "mv4vuUGYG";
  describe("Successfully handle subscrptions", () => {
    it("Should create a new subscription", () => {
      assert.isFulfilled(
        subscription.create({
          total: 200.0,
          currency: "ARS",
          name: "Prueba",
          description: "Prueba",
          type: "dynamic",
          interval: "1m",
          trial: 1,
          limit: 0,
          webhook: "http://webhook",
          return_url: "http://return_url",
          features: ["accept_no_funds"],
        })
      );
    });

    it("Should edit the subscription", () => {
      assert.isFulfilled(
        subscription.edit(id, {
          total: 300.0,
        })
      );
    });

    it("Should get all the subscriptions", () => {
      assert.isFulfilled(subscription.all());
    });

    it("Should get the second page of subscriptions", () => {
      assert.isFulfilled(subscription.all(2));
    });

    it("Should find the subscription", () => {
      assert.isFulfilled(subscription.find(id));
    });

    it("Should active the subscription", () => {
      assert.isFulfilled(subscription.activate(id));
    });

    it("Should delete the subscription", () => {
      assert.isFulfilled(subscription.delete(id));
    });
  });
});
