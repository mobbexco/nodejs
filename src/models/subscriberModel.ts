import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  customer: {
    type: "object",
    props: {
      identification: "string",
      email: "email",
      name: "string",
      phone: "string",
    },
  },
  reference: "string",
  startDate: {
    type: "object",
    props: {
      day: "integer",
      month: "integer",
    },
  },
};

export default schema;
