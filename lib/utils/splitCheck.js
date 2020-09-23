function splitCheck (object) {
  const total = object.total
  const splitArray = object.split

  let splitsTotal = 0

  splitArray.forEach(entity => {
    let entityTotal = entity.total
    splitsTotal += entityTotal
  })

  if (total > splitsTotal) {
    throw new Error (`The sum of the splits total is less than the checkout total. Is $${splitsTotal}, should be $${total}`)
  }

  if (total < splitsTotal) {
    throw new Error(`The sum of the splits total is greater than the checkout total. Is $${splitsTotal}, should be $${total}`)
  }
}

module.exports = splitCheck
