const chai = require('chai');
const chaiPromise = require('chai-as-promised')
const assert = chai.assert;
const checkout = require('../lib/resources/checkout')
const configuration = require('../lib/configurations')

chai.use(chaiPromise)

describe('Wallet', () => {
    describe('Errors with wallet', () => {
        it('Expect error with no Private Key', () => {
            assert.isRejected(checkout.create({
                total: 5,
                    currency: "ARS",
                    reference: "2982-2XtPXlgSaWccqUyobuv4sEmLYMV0N6oX6MoridMw",
                    description: "Descripción de la Venta",
                    customer: {
                        uid: "12123123",
                        name: "Demo Mobbex",
                        identification: "23234234",
                        email: "demo@mobbex.com"
                    },
                  options: {
                    domain: "mi.dominio.com"
                  },
                    wallet: true,
                    return_url: "https://localhost:8443/sale/return?session=56789",
                    webhook: "https://localhost:8443/sale/webhook?user=1234"
            }))
        })

        it('Expect error no Public Key', () => {
            assert.isRejected(checkout.process("INTENTCODE", {
                installment: "1",
                securityCode: "765"
            }))
        })
    })

    describe('Sucessfully handle wallet operations', () => {

        configuration.setPublicKey('PUBLIC-KEY')
        configuration.setPrivateKey('PRIVATE-KEY')

        it('Should create a checkout with a wallet', () => {
            assert.ok(checkout.create({
                total: 5,
                    currency: "ARS",
                    reference: "2982-2XtPXlgSaWccqUyobuv4sEmLYMV0N6oX6MoridMw",
                    description: "Descripción de la Venta",
                    customer: {
                        uid: "12123123",
                        name: "Demo Mobbex",
                        identification: "23234234",
                        email: "demo@mobbex.com"
                    },
                  options: {
                    domain: "mi.dominio.com"
                  },
                    wallet: true,
                    return_url: "https://localhost:8443/sale/return?session=56789",
                    webhook: "https://localhost:8443/sale/webhook?user=1234"
            }))
        })

        it('Should process the checkout', () => {
            assert.ok(checkout.process("Intent-Token", {
                installment: "1",
                securityCode: "765"
            }))
        })
    })
})
