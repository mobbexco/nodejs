import Request from "../requests";
import schema from "../models/paymentOrderModel";

export class PaymentOrder {
  requestManager: Request = new Request();

  create(body: Record<string, unknown>): Promise<unknown> {
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
