import Request from "../requests";
import schema from "../models/checkoutModel";
import walletSchema from "../models/walletModel";
import { splitCheck } from "../utils/splitCheck";

const requestManager = new Request();

const checkoutModule = module.exports;

checkoutModule.create = (body: any) => {
  if (body.wallet) {
    return requestManager.create(
      {
        path: `/checkout`,
        method: "POST",
        schema: walletSchema,
        private: true,
      },
      body
    );
  } else {
    return requestManager.create(
      {
        path: `/checkout`,
        method: "POST",
        schema,
      },
      body
    );
  }
};

checkoutModule.split = (body: any) => {
  splitCheck(body);
  return requestManager.create(
    {
      path: `/checkout`,
      method: "POST",
      schema,
    },
    body
  );
};

checkoutModule.release = (id: string) => {
  return requestManager.create({
    path: `/operations/${id}/release`,
    method: "GET",
  });
};
