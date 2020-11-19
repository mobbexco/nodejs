import Request from "../requests";
import { auditKeyCheck } from "../utils/auditKeyCheck";
import searchSchema from "../models/loyaltySearchModel";
import createSchema from "../models/loyaltyCreateModel";
import chargeSchema from "../models/loyaltyChargeModel";
import { LoyaltyCharge, LoyaltyCreate, LoyaltySearch } from "../types";

export class Loyalty {
  requestManager: Request = new Request();

  create(body: LoyaltyCreate): Promise<unknown> {
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

  search(body: LoyaltySearch): Promise<unknown> {
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

  balance(body: LoyaltySearch): Promise<unknown> {
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

  charge(body: LoyaltyCharge): Promise<unknown> {
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
