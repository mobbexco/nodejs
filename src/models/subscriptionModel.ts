import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  total: "number",
  currency: "string",
  name: "string",
  description: "string",
  type: {
    type: "string",
    enum: ["dynamic", "manual"],
  },
  interval: {
    type: "string",
    enum: ["7d", "15d", "1m", "2m", "3m", "6m", "1y"],
  },
  trial: "number|optional",
  limit: "number",
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
    optional: true,
    items: "string",
  },
};

export default schema;
