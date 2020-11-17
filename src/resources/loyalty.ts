import Request from "../requests";
import { auditKeyCheck } from "../utils/auditKeyCheck";
import searchSchema from "../models/loyaltySearchModel";
import createSchema from "../models/loyaltyCreateModel";
import chargeSchema from "../models/loyaltyChargeModel";
import Bluebird = require("bluebird");

export class Loyalty {
  requestManager: Request = new Request();

  create(body: Record<string, unknown>): Bluebird<unknown> {
    auditKeyCheck();
    return this.requestManager.create(
      {
        path: "/loyalty/accounts/create",
        method: "POST",
        schema: createSchema,
      },
      body
    );
  }

  search(body: Record<string, unknown>): Bluebird<unknown> {
    auditKeyCheck();
    return this.requestManager.create(
      {
        path: "/loyalty/accounts/search",
        method: "POST",
        schema: searchSchema,
      },
      body
    );
  }

  balance(body: Record<string, unknown>): Bluebird<unknown> {
    auditKeyCheck();
    return this.requestManager.create(
      {
        path: "/loyalty/accounts/balance",
        method: "POST",
        schema: searchSchema,
      },
      body
    );
  }

  charge(body: Record<string, unknown>): Bluebird<unknown> {
    auditKeyCheck();
    return this.requestManager.create(
      {
        path: "/loyalty/points/charge",
        method: "POST",
        schema: chargeSchema,
      },
      body
    );
  }
}

export default new Loyalty();
