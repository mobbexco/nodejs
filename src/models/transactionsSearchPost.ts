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
  created: {
    type: "object",
    props: {
      from: {
        type: "object",
        props: {
          day: "string",
          month: "string",
          year: "string",
        },
      },
      to: {
        type: "object",
        props: {
          day: "string",
          month: "string",
          year: "string",
        },
      },
    },
  },
  text: "string|optional",
  reference: "string|optional",
  test: "boolean|optional",
  context: {
    type: "array",
    optional: true,
    items: "string",
  },
};

export default schema;
