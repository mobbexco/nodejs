import Request from "../requests";
import schema from "../models/paymentCodeModel";
import { objectToUrl } from "../utils/paramsUrl";
import { paramsCheck as check } from "../utils/parametersCheck";

const requestManager = new Request();

const paymentCode = module.exports;

paymentCode.create = (code: string, object: any) => {
  check(code);
  const params = objectToUrl(schema, object);
  return requestManager.create({
    path: `/payment_code/gen/${code}?${params}`,
    method: "GET",
  });
};
