import Bluebird = require("bluebird");
import schema from "../models/subscriptionModel";
import Request from "../requests";

export class Subscription {
  request: Request = new Request();

  create(body: Record<string, unknown>): Bluebird<unknown> {
    return this.request.create(
      {
        path: "/subscriptions",
        method: "POST",
        schema,
      },
      body
    );
  }

  edit(id: string, body: Record<string, unknown>): Bluebird<unknown> {
    return this.request.create(
      {
        path: `/subscriptions/${id}`,
        method: "POST",
      },
      body
    );
  }

  all(): Bluebird<unknown> {
    return this.request.create({
      path: "/subscriptions",
      method: "GET",
    });
  }

  find(id: string): Bluebird<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}`,
      method: "GET",
    });
  }

  activate(id: string): Bluebird<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}/action/activate`,
      method: "GET",
    });
  }

  delete(id: string): Bluebird<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}/action/delete`,
      method: "GET",
    });
  }
}

export default new Subscription();
