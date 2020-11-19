import Request from "../requests";
import schema from "../models/paymentOrderModel";
import { PaymentOrder as PaymentOrderModel } from "../types";

export class PaymentOrder {
  requestManager: Request = new Request();

  create(body: PaymentOrderModel): Promise<unknown> {
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
