import Request from "../requests";
import schema from "../models/paymentOrderModel";
import Bluebird = require("bluebird");

export class PaymentOrder {
  requestManager: Request = new Request();

  create(body: Record<string, unknown>): Bluebird<unknown> {
    return this.requestManager.create(
      {
        path: `/payment_order`,
        method: "POST",
        schema,
      },
      body
    );
  }
}

export default new PaymentOrder();
