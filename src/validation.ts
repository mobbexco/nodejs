import * as Ajv from "ajv";

const validationModule = {
  ajv: new Ajv({
    allErrors: true,
    removeAdditional: false,
    coerceTypes: false,
  }),
} as any;

validationModule.validate = function (schema: any, data: any) {
  const validate = this.ajv.compile(schema);
  const valid = validate(data);
  const validationErrors: any[] = [];

  if (!valid) {
    validate.errors.forEach((error: any) => {
      validationErrors.push(error);
    });
  }
  return validationErrors;
};

validationModule.message = (validationErrors: any) => {
  let message = "Failing object validation:";
  validationErrors.forEach((error: any) => {
    if (error.keyword === "required") {
      message += ` ${error.message}.`;
    } else message += ` ${error.dataPath}: ${error.message}.`;
  });
  return message;
};

export default validationModule;
