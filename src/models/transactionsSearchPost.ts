const schema = {
  properties: {
    page: {
      //
    },
    limit: {
      //
    },
    status: {
      type: "number",
    },
    currency: {
      type: "string",
      enum: ["ARS", "TEST"],
    },
    created: {
      type: "object",
      properties: {
        from: {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            month: {
              type: "string",
            },
            year: {
              type: "string",
            },
          },
        },
        to: {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            month: {
              type: "string",
            },
            year: {
              type: "string",
            },
          },
        },
      },
    },
    text: {
      type: "string",
    },
    reference: {
      type: "string",
    },
    test: {
      //
    },
    context: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export default schema;
