import configurations from "./configurations";
import { Validation } from "./validation";
import axios from "axios";
import { ValidationSchema } from "fastest-validator";
const JSON_MIME_TYPE = "application/json";

const validation = new Validation();

export default class Request {
  create(
    options: Record<string, unknown>,
    data?: Record<string, unknown>
  ): Promise<unknown> {
    return new Promise(
      (
        resolve: (thenableOrResult?: unknown) => void,
        reject: (error?: Error) => void
      ) => {
        const schema = options.schema as ValidationSchema;
        const url = options.transactions
          ? "https://api.mobbex.com/2.0"
          : "https://api.mobbex.com/p";
        const path = options.path;
        const method = options.method;

        const headers = options.private
          ? this.setHeaders("private")
          : this.setHeaders();

        let error: Error;

        if (method === "POST" || method === "PUT") {
          if (!data) {
            error = new Error("Expecting two arguments, one given");
            reject(error);
          }
        }

        const body: Record<string, unknown> | undefined = data && data;

        if (method === "GET") {
          axios({
            method,
            url: url + path,
            headers,
          })
            .then((response) => {
              resolve(response.data);
            })
            .catch((requestError) => reject(new Error(requestError)));
        }

        if (method === "POST") {
          if (schema) {
            const errors = validation.validate(body, schema);
            if (errors.length > 0) {
              error = new Error(validation.message(errors));
              reject(error);
            }
          }
          axios({
            method,
            url: url + path,
            headers,
            data: body,
          })
            .then((response) => {
              resolve(response.data);
            })
            .catch((requestError) => reject(new Error(requestError)));
        }
      }
    );
  }

  /* istanbul ignore next */
  setHeaders(type?: string): Record<string, unknown> {
    let headers = {};
    let error: Error;

    if (type === "private") {
      if (!configurations.getPrivateKey()) {
        error = new Error("Must set Private Key");
        throw error;
      } else {
        headers = {
          "api-key": configurations.getPrivateKey(),
          "Content-Type": JSON_MIME_TYPE,
          Connection: "keep-alive",
        };
        return headers;
      }
    } else {
      if (configurations.getAuditKey()) {
        headers = {
          "x-audit-key": configurations.getAuditKey(),
          "Content-Type": JSON_MIME_TYPE,
        };
        return headers;
      } else if (
        !configurations.getApiKey() ||
        !configurations.getAccessToken()
      ) {
        error = new Error("Must set Api Key and Access Token");
        throw error;
      } else {
        headers = {
          "x-api-key": configurations.getApiKey(),
          "x-access-token": configurations.getAccessToken(),
          "Content-Type": JSON_MIME_TYPE,
        };
        return headers;
      }
    }
  }
}
