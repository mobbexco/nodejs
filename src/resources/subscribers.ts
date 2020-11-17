import Request from "../requests";
import schema from "../models/subscriberModel";
import { paramsCheck as check } from "../utils/parametersCheck";

const requestManager = new Request();

const subscribersModule = module.exports;

subscribersModule.create = (id: string, body: any) => {
  check(id);
  return requestManager.create(
    {
      path: `/subscriptions/${id}/subscriber`,
      method: "POST",
      schema,
    },
    body
  );
};

subscribersModule.all = (id: string) => {
  check(id);
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber`,
    method: "GET",
  });
};

subscribersModule.find = (id: string, sid: string) => {
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}`,
    method: "GET",
  });
};

subscribersModule.edit = (id: string, sid: string, body: any) => {
  check(id);
  check(sid);
  return requestManager.create(
    {
      path: `/subscriptions/${id}/subscriber/${sid}`,
      method: "POST",
    },
    body
  );
};

subscribersModule.suspend = (id: string, sid: string) => {
  check(id);
  check(sid);
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
    method: "GET",
  });
};

subscribersModule.activate = (id: string, sid: string) => {
  check(id);
  check(sid);
  return requestManager.create({
    path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
    method: "GET",
  });
};

subscribersModule.reschedule = (id: string, sid: string, body: any) => {
  check(id);
  check(sid);
  return requestManager.create(
    {
      path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
      method: "POST",
    },
    body
  );
};

subscribersModule.move = (id: string, sid: string, body: any) => {
  check(id);
  check(sid);
  return requestManager.create(
    {
      path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
      method: "POST",
    },
    body
  );
};
