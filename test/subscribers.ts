import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import configuration from "../src/configurations";
import subscribers from "../src/resources/subscribers";

chai.use(chaiAsPromised);

describe("Subscribers Module", () => {
  configuration.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
  const id = "mv4vuUGYG";
  const sid = "Mw57pJPU~";
  const eid = "54Z45DRXEZ01QWYLUL";

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

    it("Should retry the execution", () => {
      assert.isFulfilled(subscribers.retryExecution(id, sid, eid));
    });

    it("Should set execution as paid", () => {
      assert.isFulfilled(subscribers.setPaidExecution(id, sid, eid));
    });

    it("Should manually execute", () => {
      assert.isFulfilled(subscribers.manualExecution(id, sid));
    });

    it("Should manually execute with different price", () => {
      assert.isFulfilled(
        subscribers.manualDiffExecution(id, sid, { total: 300 })
      );
    });

    it("Should massively execute", () => {
      assert.isFulfilled(
        subscribers.massiveManualExecution(id, [
          { sid: sid, total: 200 },
          { sid: "testSid", total: 100 },
        ])
      );
    });

    it("Should schedule an execution", () => {
      assert.isFulfilled(
        subscribers.scheduledExecution(id, sid, { date: { day: 1, month: 3 } })
      );
    });
  });
});
