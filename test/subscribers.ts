import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import configuration from "../src/configurations";
const subscribers = require("../src/resources/subscribers");

chai.use(chaiAsPromised);

describe("Subscribers Module", () => {
  configuration.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
  let id = "mv4vuUGYG";
  let sid = "Mw57pJPU~";
  describe("Successfully handle subscribers", () => {
    it("Should create new subscriber", () => {
      assert.isFulfilled(
        subscribers.create(id, {
          customer: {
            identification: "32321321",
            email: "demo@mobbex.com",
            name: "Demo User",
          },
          startDate: {
            day: 15,
            month: 5,
          },
          reference: "demo_user_321",
        })
      );
    });

    it("Should get all the subscribers", () => {
      assert.isFulfilled(subscribers.all(id));
    });

    it("Should find the user", () => {
      assert.isFulfilled(subscribers.find(id, sid));
    });

    it("Should edit the user", () => {
      assert.isFulfilled(
        subscribers.edit(id, sid, { reference: "new_reference" })
      );
    });

    it("Should suspend the user", () => {
      assert.isFulfilled(subscribers.suspend(id, sid));
    });

    it("Should activate the user", () => {
      assert.isFulfilled(subscribers.activate(id, sid));
    });

    it("Should reschedule the user", () => {
      assert.isFulfilled(
        subscribers.reschedule(id, sid, { startDate: { day: 10, month: 12 } })
      );
    });

    it("Should move the user", () => {
      assert.isFulfilled(subscribers.move(id, sid, { sid: "newsubscription" }));
    });
  });

  describe("Error in subscription module functions", () => {
    it("Expect error in id type argument", () => {
      assert.throws(
        subscribers.activate.bind(subscribers, 300, sid),
        "Wrong type argument. 300 must be string, is number"
      );
    });

    it("Expect error in missing id argument", () => {
      assert.throws(subscribers.activate, "Missing argument");
    });

    it("Expect error sid type argument", () => {
      assert.throws(
        subscribers.activate.bind(subscribers, id, 300),
        "Wrong type argument. 300 must be string, is number"
      );
    });

    it("Expect error sid missing id argument", () => {
      assert.throws(subscribers.activate, "Missing argument");
    });
  });

  describe("Error in Subscriber Schema", () => {
    it("Expect validation error missing argument", () => {
      assert.isRejected(
        subscribers.create(id, {
          startDate: {
            day: 15,
            month: 5,
          },
          reference: "demo_user_321",
        })
      );
    });

    it("Expect validation type error", () => {
      assert.isRejected(
        subscribers.create(id, {
          customer: {
            identification: 32133,
            email: "demo@mobbex.com",
            name: "Demo User",
          },
          startDate: {
            day: 15,
            month: 5,
          },
          reference: "demo_user_321",
        })
      );
    });

    it("Expect validation error with argument in date missing", () => {
      assert.isRejected(
        subscribers.create(id, {
          customer: {
            identification: 32133,
            email: "demo@mobbex.com",
            name: "Demo User",
          },
          startDate: {
            month: 5,
          },
          reference: "demo_user_321",
        })
      );
    });
  });
});
