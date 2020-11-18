/* eslint-disable */
const Validator = require("fastest-validator");
/* eslint-enable */
import { ValidationSchema, ValidationError } from "fastest-validator";

export class Validation {
  v = new Validator();

  validate(data: unknown, schema: ValidationSchema): ValidationError[] {
    const errors: ValidationError[] = [];
    const validator: boolean | ValidationError[] = this.v.validate(
      data,
      schema
    );
    if (typeof validator !== "boolean") {
      validator.forEach((error) => {
        errors.push(error);
      });
    }

    return errors;
  }

  message(validationErrors: ValidationError[]): string {
    let message = "Failing object validation:\n";
    validationErrors.forEach((error) => {
      message += `${error.message}\n`;
    });
    return message;
  }
}
