const chai = require('chai');
const chaiPromise = require('chai-as-promised')
const assert = chai.assert;
const paymentOrder = require('../lib/resources/paymentOrder')

chai.use(chaiPromise)

describe('Paymen Order Module', () => {

  describe('Successfully handle Payment Order', () => {

    it('Should create a Payment Order', () => {
      assert.isFulfilled(paymentOrder.create({
        total: 100,
        description: "Some Description #3",
        actions: [
          {
            icon: "attachment",
            title: "Factura",
            url: "https://speryans.com/mifactura/123"
          }
        ],
        reference: "mi_referencia_123"
      }))
    })

    describe('Error in Model', () => {

      it('Expect error with model missing total', () => {
        assert.isRejected(paymentOrder.create({
          description: "Some Description #3",
          actions: [
            {
              icon: "attachment",
              title: "Factura",
              url: "https://speryans.com/mifactura/123"
            }
          ],
          reference: "mi_referencia_123"
        }))
      })
    })
  })
})
