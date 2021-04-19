import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import subscribers from "../src/resources/subscribers";

chai.use(chaiAsPromised);

const unauthorizedError = "Request failed with status code 401";

describe("Subscribers Module", () => {
  const id = "mv4vuUGYG";
  const sid = "Mw57pJPU~";
  const eid = "54Z45DRXEZ01QWYLUL";

  describe("Successfully handle subscribers", () => {
    it("Should make request to create new subscriber", () => {
      return assert.isRejected(
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

    it("Should make request to get all the subscribers", () => {
      return assert.isRejected(subscribers.all(id), unauthorizedError);
    });

    it("Should make request to find the user", () => {
      return assert.isRejected(subscribers.find(id, sid), unauthorizedError);
    });

    it("Should make request to edit the user", () => {
      return assert.isRejected(
        subscribers.edit(id, sid, { reference: "new_reference" }),
        unauthorizedError
      );
    });

    it("Should make request to suspend the user", () => {
      return assert.isRejected(subscribers.suspend(id, sid), unauthorizedError);
    });

    it("Should make request to activate the user", () => {
      return assert.isRejected(
        subscribers.activate(id, sid),
        unauthorizedError
      );
    });

    it("Should make request to reschedule the user", () => {
      return assert.isRejected(
        subscribers.reschedule(id, sid, { startDate: { day: 10, month: 12 } }),
        unauthorizedError
      );
    });

    it("Should make request to move the user", () => {
      return assert.isRejected(
        subscribers.move(id, sid, { sid: "newsubscription" }),
        unauthorizedError
      );
    });

    it("Should make request to retry the execution", () => {
      return assert.isRejected(
        subscribers.retryExecution(id, sid, eid),
        unauthorizedError
      );
    });

    it("Should make request to set execution as paid", () => {
      return assert.isRejected(
        subscribers.setPaidExecution(id, sid, eid),
        unauthorizedError
      );
    });

    it("Should make request to manually execute", () => {
      return assert.isRejected(
        subscribers.manualExecution(id, sid),
        unauthorizedError
      );
    });

    it("Should make request to manually execute with different price", () => {
      return assert.isRejected(
        subscribers.manualDiffExecution(id, sid, { total: 300 }),
        unauthorizedError
      );
    });

    it("Should make request to massively execute", () => {
      return assert.isRejected(
        subscribers.massiveManualExecution(id, [
          { sid: sid, total: 200 },
          { sid: "testSid", total: 100 },
        ])
      );
    });

    it("Should make request to schedule an execution", () => {
      return assert.isRejected(
        subscribers.scheduledExecution(id, sid, { date: { day: 1, month: 3 } }),
        unauthorizedError
      );
    });
  });
});
