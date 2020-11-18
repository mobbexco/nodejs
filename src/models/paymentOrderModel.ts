const schema = {
  required: ["total", "description"],
  properties: {
    total: {
      type: "number",
    },
    description: {
      type: "string",
      maxLength: 255,
    },
    email: {
      type: "string",
    },
    phone: {
      type: "string",
    },
    reference: {
      type: "string",
    },
    due: {
      type: "object",
      properties: {
        day: {
          type: "integer",
        },
        month: {
          type: "integer",
        },
        year: {
          type: "integer",
        },
      },
    },
    secondDue: {
      type: "object",
      properties: {
        days: {
          type: "integer",
        },
        surcharge: {
          type: "number",
        },
      },
    },
    actions: {
      type: "array",
      items: {
        type: "object",
      },
    },
    return_url: {
      type: "string",
      pattern: "^(http)",
    },
    webhook: {
      type: "string",
      pattern: "^(http)",
    },
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          image: {
            type: "string",
          },
          quantity: {
            type: "number",
          },
          description: {
            type: "string",
          },
          total: {
            type: "number",
          },
        },
      },
    },
    options: {
      type: "object",
      properties: {
        domain: {
          type: "string",
        },
        theme: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["light", "dark"],
            },
            background: {
              type: "string",
              pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
            },
            showHeader: {
              type: "boolean",
            },
            header: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
                logo: {
                  type: "string",
                  pattern: "^(https)",
                },
              },
            },
            colors: {
              type: "object",
              properties: {
                primary: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
    sources: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export default schema;
