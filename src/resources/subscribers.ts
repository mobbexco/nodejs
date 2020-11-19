import Request from "../requests";
import schema from "../models/subscriberModel";
import { Subscriber as SubscriberModel } from "../types";

export class Subscriber {
  requestManager: Request = new Request();

  create = (id: string, body: SubscriberModel): Promise<unknown> => {
    return this.requestManager.create(
      {
        path: `/subscriptions/${id}/subscriber`,
        method: "POST",
        schema,
      },
      body
    );
  };

  all = (id: string): Promise<unknown> => {
    return this.requestManager.create({
      path: `/subscriptions/${id}/subscriber`,
      method: "GET",
    });
  };

  find = (id: string, sid: string): Promise<unknown> => {
    return this.requestManager.create({
      path: `/subscriptions/${id}/subscriber/${sid}`,
      method: "GET",
    });
  };

  edit = (
    id: string,
    sid: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    id;
    return this.requestManager.create(
      {
        path: `/subscriptions/${id}/subscriber/${sid}`,
        method: "POST",
      },
      body
    );
  };

  suspend = (id: string, sid: string): Promise<unknown> => {
    return this.requestManager.create({
      path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
      method: "GET",
    });
  };

  activate = (id: string, sid: string): Promise<unknown> => {
    return this.requestManager.create({
      path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
      method: "GET",
    });
  };

  reschedule = (
    id: string,
    sid: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.requestManager.create(
      {
        path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
        method: "POST",
      },
      body
    );
  };

  move = (
    id: string,
    sid: string,
    body: Record<string, unknown>
  ): Promise<unknown> => {
    return this.requestManager.create(
      {
        path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
        method: "POST",
      },
      body
    );
  };
}

export default new Subscriber();
