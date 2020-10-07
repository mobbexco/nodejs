const requestManager = require('../requests')
const check = require('../utils/parametersCheck')

let sourcesModule = module.exports

sourcesModule.list = (code, total) => {
  let newTotal
  if (typeof total !== 'string' && typeof total !== 'undefined') {
    newTotal = total.toString()
  }
  check(code)
  check(newTotal)
  return requestManager.create({
    path: `/sources/list/${code}?total=${total}`,
    method: 'GET'
  })
}
