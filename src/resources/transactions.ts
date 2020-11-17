import Request from "../requests";
import { objectToUrl } from "../utils/paramsUrl";
import getSchema from "../models/transactionsSearchGet";
import postSchema from "../models/transactionsSearchPost";
import Bluebird = require("bluebird");

export class Transaction {
  requestManager: Request = new Request();

  get(reference: string): Bluebird<unknown> {
    return this.requestManager.create({
      path: `/transactions/coupons/${reference}`,
      method: "GET",
      transactions: true,
    });
  }

  search(
    object: Record<string, string | number | boolean>,
    ...args: string[]
  ): Bluebird<unknown> {
    let method;
    if (args.length === 1) {
      method = args[0];
    }

    if (method === "get") {
      const params = objectToUrl(getSchema, object);
      return this.requestManager.create({
        path: `/operations?${params}`,
        method: "GET",
      });
    } else {
      let path = `/operations`;
      if (object.page) {
        path += object.limit
          ? `?page=${object.page}&limit=${object.limit}`
          : `?page=${object.page}`;
      }
      return this.requestManager.create(
        {
          path,
          method: "POST",
          schema: postSchema,
        },
        object
      );
    }
  }

  refund(id: string): Bluebird<unknown> {
    return this.requestManager.create({
      path: `/operations/${id}/refund`,
      method: "GET",
    });
  }

  partialRefund(id: string, total: number): Bluebird<unknown> {
    return this.requestManager.create(
      {
        path: `/operations/${id}/refund`,
        method: "POST",
      },
      { total }
    );
  }

  capture(id: string, total: number): Bluebird<unknown> {
    return this.requestManager.create(
      {
        path: `/operations/${id}/capture`,
        method: "POST",
      },
      { total }
    );
  }
}

export default new Transaction();
