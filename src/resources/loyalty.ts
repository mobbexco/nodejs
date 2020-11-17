import Request from "../requests";
import { auditKeyCheck } from "../utils/auditKeyCheck";
import searchSchema from "../models/loyaltySearchModel";
import createSchema from "../models/loyaltyCreateModel";
import chargeSchema from "../models/loyaltyChargeModel";

const requestManager = new Request();

const loyaltyModule = module.exports;

loyaltyModule.create = (body: any) => {
  auditKeyCheck();
  return requestManager.create(
    {
      path: "/loyalty/accounts/create",
      method: "POST",
      schema: createSchema,
    },
    body
  );
};

loyaltyModule.search = (body: any) => {
  auditKeyCheck();
  return requestManager.create(
    {
      path: "/loyalty/accounts/search",
      method: "POST",
      schema: searchSchema,
    },
    body
  );
};

loyaltyModule.balance = (body: any) => {
  auditKeyCheck();
  return requestManager.create(
    {
      path: "/loyalty/accounts/balance",
      method: "POST",
      schema: searchSchema,
    },
    body
  );
};

loyaltyModule.charge = (body: any) => {
  auditKeyCheck();
  return requestManager.create(
    {
      path: "/loyalty/points/charge",
      method: "POST",
      schema: chargeSchema,
    },
    body
  );
};
