module.exports = {
  required: ['credential', 'tax_id', 'points', 'reference'],
  properties: {
    credential: {
      type: 'string'
    },
    tax_id: {
      type: 'string'
    },
    points: {
      type: 'number'
    },
    reference: {
      type: 'string'
    }
  }
}
