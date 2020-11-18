const schema = {
  properties: {
    page: {
      type: "number",
    },
    limit: {
      type: "number",
    },
    status: {
      type: "number",
    },
    currency: {
      type: "string",
      enum: ["ARS", "TEST"],
    },
    created_from: {
      type: "string",
    },
    created_to: {
      type: "string",
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
      type: "string",
      pattern: "/^\\S+$/g\n",
    },
  },
};

export default schema;
