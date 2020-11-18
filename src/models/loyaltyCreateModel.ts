import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  identification: "string",
  email: "email",
  credential: "string|optional",
  tax_id: "string",
  name: "string|optional",
  phone: "string|optional",
};

export default schema;
