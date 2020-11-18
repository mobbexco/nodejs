import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  reference: "string|optional",
  credential: "string|optional",
};
export default schema;
