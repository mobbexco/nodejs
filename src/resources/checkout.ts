import Request from "../requests";
import schema from "../models/checkoutModel";
import walletSchema from "../models/walletModel";
import { splitCheck } from "../utils/splitCheck";
import { Checkout as checkoutModel } from "../types";

export class Checkout {
  requestManager: Request = new Request();
  create(body: checkoutModel): Promise<unknown> {
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

  split(body: Record<string, unknown>): Promise<unknown> {
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

  release(id: string): Promise<unknown> {
    return this.requestManager.create({
      path: `/operations/${id}/release`,
      method: "GET",
    });
  }

  delete(id: string): Promise<unknown> {
    return this.requestManager.create({
      path: `/checkout/${id}`,
      method: "DELETE",
    });
  }
}

export default new Checkout();
