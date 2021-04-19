import configurations from "./configurations";
import { Validation } from "./validation";
import axios from "axios";
import { ValidationSchema } from "fastest-validator";
import {
  Checkout,
  DevConnect,
  LoyaltyCharge,
  LoyaltyCreate,
  LoyaltySearch,
  PaymentOrder,
  RequestOptions,
  Subscriber,
  Subscription,
} from "./types";
const JSON_MIME_TYPE = "application/json";

const validation = new Validation();

export default class Request {
  create(
    options: RequestOptions,
    data?:
      | Record<string, unknown>
      | Record<string, unknown>[]
      | Checkout
      | DevConnect
      | LoyaltySearch
      | LoyaltyCreate
      | LoyaltyCharge
      | PaymentOrder
      | Subscriber
      | Subscription
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

        const headers = this.setHeaders();

        let error: Error;

        if (method === "POST" || method === "PUT") {
          if (!data) {
            error = new Error("Expecting two arguments, one given");
            reject(error);
            return;
          }
        }

        const body:
          | Record<string, unknown>
          | Record<string, unknown>[]
          | Checkout
          | DevConnect
          | LoyaltyCharge
          | LoyaltyCreate
          | LoyaltySearch
          | PaymentOrder
          | Subscriber
          | Subscription
          | undefined = data && data;

        if (method === "GET" || method === "DELETE") {
          axios({
            method,
            url: url + path,
            headers,
          })
            .then((response) => {
              resolve(response.data);
            })
            .catch((requestError) => {
              reject(new Error(requestError));
              return;
            });
        }

        if (method === "POST" || method === "PUT") {
          if (schema) {
            const errors = validation.validate(body, schema);
            if (errors.length > 0) {
              error = new Error(validation.message(errors));
              reject(error);
              return;
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
            .catch((requestError) => {
              reject(new Error(requestError));
              return;
            });
        }
      }
    );
  }

  /* istanbul ignore next */
  setHeaders(type?: string): Record<string, unknown> {
    let headers = {};
    let error: Error;

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
