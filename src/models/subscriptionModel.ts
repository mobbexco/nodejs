const schema = {
  required: [
    "total",
    "currency",
    "name",
    "description",
    "type",
    "interval",
    "trial",
    "limit",
  ],
  properties: {
    total: {
      type: "number",
    },
    currency: {
      type: "string",
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    type: {
      type: "string",
      enum: ["dynamic", "manual"],
    },
    interval: {
      type: "string",
      enum: ["7d", "15d", "1m", "2m", "3m", "6m", "1y"],
    },
    trial: {
      type: "number",
    },
    limit: {
      type: "number",
    },
    webhook: {
      type: "string",
      pattern: "^(http)",
    },
    return_url: {
      type: "string",
      pattern: "^(http)",
    },
    features: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

export default schema;
