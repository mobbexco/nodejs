import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import loyalty from "../src/resources/loyalty";
import { auditKeyCheck } from "../src/utils/auditKeyCheck";
import configuration from "../src/configurations";

chai.use(chaiAsPromised);

before(() => {
  configuration.configure({
    apiKey: "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj",
    accessToken: "d31f0721-2f85-44e7-bcc6-15e19d1a53cc",
  });
});

describe("Loyalty Module", () => {
  describe("Error with Audit Key", () => {
    it("Should expect Error getting Audit Key", () => {
      return assert.throws(auditKeyCheck, "You must set an Audit Key");
    });
  });

  describe("Successfully handle Loyalty Module", () => {
    it("Should make request to get the audit key", () => {
      configuration.setAuditKey("audit-key");
      return assert.equal(configuration.getAuditKey(), "audit-key");
    });

    it("Should make request to create a new Loyalty Account", () => {
      return assert.isRejected(
        loyalty.create({
          identification: "12123123",
          email: "juanperez@email.com",
          credential: "a1b2c3d4",
          tax_id: "30121231234",
        }),
        "Request failed with status code 401"
      );
    });

    it("Should make request to search a Loyalty Account", () => {
      return assert.isRejected(
        loyalty.search({
          reference: "12123123",
        }),
        "Request failed with status code 401"
      );
    });

    it("Should make request to charge points", () => {
      return assert.isRejected(
        loyalty.charge({
          credential: "a1b2c3d4",
          tax_id: "30121231234",
          points: 32,
          reference: "pointscharge1",
        }),
        "Request failed with status code 401"
      );
    });

    it("Should search the account balance", () => {
      return assert.isFulfilled(
        loyalty.balance({
          credential: "a1b2c3d4",
        })
      );
    });
  });
  //Other testing
});
