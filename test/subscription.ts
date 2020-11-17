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

  describe("Error in Subscription Schema", () => {
    it("Expect missing property", () => {
      assert.isRejected(
        subscription.create({
          total: 200.0,
          currency: "ARS",
          name: "Prueba",
          description: "Prueba",
          //type: 'dynamic',
          interval: "1m",
          trial: 1,
          limit: 0,
          webhook: "http://webhook",
          return_url: "http://return_url",
          features: ["accept_no_funds"],
        })
      );
    });

    it("Expect type error currency", () => {
      assert.isRejected(
        subscription.create({
          total: "200.00",
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

    it("Expect property not included", () => {
      assert.isRejected(
        subscription.create({
          total: "200.00",
          currency: "ARS",
          name: "Prueba",
          description: "Prueba",
          type: "dynamic",
          interval: "1month", // 1month not accepted
          trial: 1,
          limit: 0,
          webhook: "http://webhook",
          return_url: "http://return_url",
          features: ["accept_no_funds"],
        })
      );
    });

    it("Expect array error type", () => {
      assert.isRejected(
        subscription.create({
          total: "200.00",
          currency: "ARS",
          name: "Prueba",
          description: "Prueba",
          type: "dynamic",
          interval: "1m",
          trial: 1,
          limit: 0,
          webhook: "http://webhook",
          return_url: "http://return_url",
          features: [234],
        })
      );
    });

    it("Expect url not matching http error", () => {
      assert.isRejected(
        subscription.create({
          total: "200.00",
          currency: "ARS",
          name: "Prueba",
          description: "Prueba",
          type: "dynamic",
          interval: "1m",
          trial: 1,
          limit: 0,
          webhook: "webhook-no-http",
          features: ["accept_no_funds"],
        })
      );
    });
  });
});
