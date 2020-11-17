import Request from "../requests";
import schema from "../models/paymentOrderModel";

const requestManager = new Request();

const paymenOrderModule = module.exports;

paymenOrderModule.create = (body: any) => {
  return requestManager.create(
    {
      path: `/payment_order`,
      method: "POST",
      schema,
    },
    body
  );
};
