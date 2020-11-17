import schema from "../models/subscriptionModel";
import Request from "../requests";
import { paramsCheck as check } from "../utils/parametersCheck";

const request = new Request();

const subscriptionsModule = module.exports;

subscriptionsModule.create = (body: any) => {
  return request.create(
    {
      path: "/subscriptions",
      method: "POST",
      schema,
    },
    body
  );
};

subscriptionsModule.edit = (id: string, body: any) => {
  check(id);
  return request.create(
    {
      path: `/subscriptions/${id}`,
      method: "POST",
    },
    body
  );
};

subscriptionsModule.all = () => {
  return request.create({
    path: "/subscriptions",
    method: "GET",
  });
};

subscriptionsModule.find = (id: string) => {
  check(id);
  return request.create({
    path: `/subscriptions/${id}`,
    method: "GET",
  });
};

subscriptionsModule.activate = (id: string) => {
  check(id);
  return request.create({
    path: `/subscriptions/${id}/action/activate`,
    method: "GET",
  });
};

subscriptionsModule.delete = (id: string) => {
  check(id);
  return request.create({
    path: `/subscriptions/${id}/action/delete`,
    method: "GET",
  });
};
