import { ValidationSchema } from "fastest-validator";
import { Validation } from "../validation";
const validation = new Validation();

export function objectToUrl(
  schema: ValidationSchema,
  object: Record<string, string | number | boolean>
): string {
  const errors = validation.validate(object, schema);
  if (errors.length > 0) {
    throw new Error(validation.message(errors));
  }

  let url = "";
  for (const key in object) {
    /* istanbul ignore if */
    if (!Object.prototype.hasOwnProperty.call(object, key)) {
      continue;
    }
    if (url !== "") {
      url += "&";
    }
    url += key + "=" + encodeURIComponent(object[key]);
  }
  return url;
}
