import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { assert } from "chai";
import paymentOrder from "../src/resources/paymentOrder";

chai.use(chaiAsPromised);

describe("Payment Order Module", () => {
  describe("Successfully handle Payment Order", () => {
    it("Should make request to create a Payment Order", () => {
      return assert.isRejected(
        paymentOrder.create({
          total: 100,
          description: "Some Description #3",
          actions: [
            {
              icon: "attachment",
              title: "Factura",
              url: "https://speryans.com/mifactura/123",
            },
          ],
          reference: "mi_referencia_123",
        }),
        "Request failed with status code 401"
      );
    });
  });
});
