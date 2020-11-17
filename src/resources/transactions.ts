import Request from "../requests";
import { paramsCheck as check } from "../utils/parametersCheck";
import { objectToUrl } from "../utils/paramsUrl";
import getSchema from "../models/transactionsSearchGet";
import postSchema from "../models/transactionsSearchPost";

const requestManager = new Request();

const transactionsModule = module.exports;

transactionsModule.get = (reference: string) => {
  check(reference);
  return requestManager.create({
    path: `/transactions/coupons/${reference}`,
    method: "GET",
    transactions: true,
  });
};

transactionsModule.search = (object: any, ...args: any[]) => {
  let method;
  if (args.length === 1) {
    method = args[0];
  }

  if (method === "get") {
    const params = objectToUrl(getSchema, object);
    return requestManager.create({
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
    return requestManager.create(
      {
        path,
        method: "POST",
        schema: postSchema,
      },
      object
    );
  }
};

transactionsModule.refund = (id: string) => {
  check(id);
  return requestManager.create({
    path: `/operations/${id}/refund`,
    method: "GET",
  });
};

transactionsModule.partialRefund = (id: string, total: number) => {
  return requestManager.create(
    {
      path: `/operations/${id}/refund`,
      method: "POST",
    },
    { total }
  );
};

transactionsModule.capture = (id: string, total: number) => {
  return requestManager.create(
    {
      path: `/operations/${id}/capture`,
      method: "POST",
    },
    { total }
  );
};
