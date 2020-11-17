import * as Promise from "bluebird";
import configurations from "./configurations";
import validation from "./validation";
import axios from "axios";
const JSON_MIME_TYPE = "application/json";

export default class Request {
  create(options: any, data?: any) {
    return new Promise((resolve: any, reject: any) => {
      const schema = options.schema;
      const url = options.transactions
        ? "https://api.mobbex.com/2.0"
        : "https://api.mobbex.com/p";
      const path = options.path;
      const method = options.method;

      const headers: any = options.private
        ? this.setHeaders("private")
        : this.setHeaders();

      let body: any = {};
      let error: Error;

      if (method === "POST" || method === "PUT") {
        if (!data) {
          error = new Error("Expecting two arguments, one given");
          reject(error);
        }
      }
      if (data) {
        if (typeof data === "object") body = data;
        else {
          error = new Error("Expecting last argument be of type Object");
          reject(error);
        }
      }

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
          let errors;
          errors = validation.validate(schema, body);
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
    });
  }

  /* istanbul ignore next */
  setHeaders(type?: string) {
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
