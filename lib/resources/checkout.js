const requestManager = require('../requests')

let checkoutModel = module.exports

checkoutModel.create = (body) => {
  return requestManager.create({
    path: `/checkout`,
    method: `POST`
  }, body)
}
