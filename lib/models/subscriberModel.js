module.exports = {
  required: ['customer', 'startDate'],
  properties: {
    customer: {
      type: 'object',
      properties: {
        identification: {
          type: 'string'
        },
        email: {
          type: 'string',
          format: 'email'
        },
        name: {
          type: 'string'
        },
        phone: {
          type: 'string'
        }
      }
    },
    reference: {
      type: 'string'
    },
    startDate: {
      required: ['day', 'month'],
      type: 'object',
      properties: {
        day: {
          type: 'integer',
        },
        month: {
          type: 'integer',
        }
      }
    }
  }
}
