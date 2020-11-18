import * as Ajv from "ajv";

class Validation {
  ajv = new Ajv({
    allErrors: true,
    removeAdditional: false,
    coerceTypes: false,
  });

  /* istanbul ignore next */
  validate(schema: Record<string, unknown>, data: unknown): Ajv.ErrorObject[] {
    const validate: Ajv.ValidateFunction = this.ajv.compile(schema);
    const valid = validate(data);
    const validationErrors: Ajv.ErrorObject[] = [];

    if (!valid) {
      validate.errors?.forEach((error: Ajv.ErrorObject) => {
        validationErrors.push(error);
      });
    }
    return validationErrors;
  }

  message(validationErrors: Ajv.ErrorObject[]) {
    let message = "Failing object validation:";
    validationErrors.forEach((error: Ajv.ErrorObject) => {
      if (error.keyword === "required") {
        message += ` ${error.message}.`;
      } else message += ` ${error.dataPath}: ${error.message}.`;
    });
    return message;
  }
}

export default new Validation();
