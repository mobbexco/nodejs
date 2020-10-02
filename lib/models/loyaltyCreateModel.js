module.exports = {
  required: ['identification', 'email', 'tax_id'],
  properties: {
    identification: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    credential: {
      type: 'string'
    },
    tax_id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
  }
}
