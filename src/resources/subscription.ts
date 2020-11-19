import schema from "../models/subscriptionModel";
import Request from "../requests";
import { Subscription as SubscriptionModel } from "../types";

export class Subscription {
  request: Request = new Request();

  create(body: SubscriptionModel): Promise<unknown> {
    return this.request.create(
      {
        path: "/subscriptions",
        method: "POST",
        schema,
      },
      body
    );
  }

  edit(id: string, body: Record<string, unknown>): Promise<unknown> {
    return this.request.create(
      {
        path: `/subscriptions/${id}`,
        method: "POST",
      },
      body
    );
  }

  all(): Promise<unknown> {
    return this.request.create({
      path: "/subscriptions",
      method: "GET",
    });
  }

  find(id: string): Promise<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}`,
      method: "GET",
    });
  }

  activate(id: string): Promise<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}/action/activate`,
      method: "GET",
    });
  }

  delete(id: string): Promise<unknown> {
    return this.request.create({
      path: `/subscriptions/${id}/action/delete`,
      method: "GET",
    });
  }
}

export default new Subscription();
