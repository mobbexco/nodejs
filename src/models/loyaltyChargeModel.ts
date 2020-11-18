import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  credential: "string",
  tax_id: "string",
  points: "number",
  reference: "string",
};
export default schema;
