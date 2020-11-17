import Request from "../requests";
import schema from "../models/checkoutModel";
import walletSchema from "../models/walletModel";
import { splitCheck } from "../utils/splitCheck";
import Bluebird = require("bluebird");

export class Checkout {
  requestManager: Request = new Request();
  create(body: Record<string, unknown>): Bluebird<unknown> {
    if (body.wallet) {
      return this.requestManager.create(
        {
          path: `/checkout`,
          method: "POST",
          schema: walletSchema,
          private: true,
        },
        body
      );
    } else {
      return this.requestManager.create(
        {
          path: `/checkout`,
          method: "POST",
          schema,
        },
        body
      );
    }
  }

  split(body: Record<string, unknown>): Bluebird<unknown> {
    splitCheck(body);
    return this.requestManager.create(
      {
        path: `/checkout`,
        method: "POST",
        schema,
      },
      body
    );
  }

  release(id: string): Bluebird<unknown> {
    return this.requestManager.create({
      path: `/operations/${id}/release`,
      method: "GET",
    });
  }
}

export default new Checkout();
