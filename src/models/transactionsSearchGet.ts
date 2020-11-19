import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  page: "number|optional",
  limit: "number|optional",
  status: "number|optional",
  currency: {
    type: "string",
    optional: true,
    enum: ["ARS", "TEST"],
  },
  created_from: "string|optional",
  created_to: "string|optional",
  text: "string|optional",
  reference: "string|optional",
  test: "string|optional",
  context: {
    type: "string",
    optional: true,
    pattern: "/^\\S+$/g\n",
  },
};

export default schema;
