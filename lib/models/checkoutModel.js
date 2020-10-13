module.exports = {
  require: ['total', 'currency', 'description', 'return_url', 'reference'],
  properties: {
    test: {
      type: 'boolean'
    },
    total: {
      type: 'number'
    },
    currency: {
      type: 'string'
    },
    description: {
      type: 'string',
      maxLength: 255
    },
    return_url: {
      type: 'string',
      pattern: '^(http)'
    },
    reference: {
      type: 'string'
    },
    webhook: {
      type: 'string',
      pattern: '^(http)'
    },
    redirect: {
      type: 'string',
      pattern: '^(http)'
    },
    timeout: {
      type: 'number'
    },
    installments: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    intent: {
      type: 'string',
      enum: ['payment.v2', 'payment.2-step'],
    },
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          image: {
            type: 'string'
          },
          quantity: {
            type: 'number'
          },
          description: {
            type: 'string'
          },
          total: {
            type: 'number'
          },
        }
      }
    },
    sources: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    customer: {
      type: 'object',
      properties: {
        email: {
          type: 'string'
        },
        identification: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        phone: {
          type: 'string'
        },
      }
    },
    options: {
      type: 'object',
      properties: {
        domain: {
          type: 'string'
        },
        theme: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['light', 'dark']
            },
            background: {
              type: 'string',
              pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'
            },
            showHeader: {
              type: 'boolean'
            },
            header: {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                logo: {
                  type: 'string',
                  pattern: '^(https)'
                }
              }
            },
            colors: {
              type: 'object',
              properties: {
                primary: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
}
