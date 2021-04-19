import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  customer: {
    type: "object",
    props: {
      identification: "string|optional",
      email: "email",
      name: "string",
      phone: "string|optional",
    },
  },
  reference: "string",
  startDate: {
    type: "object",
    props: {
      day: "number",
      month: "number",
    },
  },
};

export default schema;
