import Request from "../requests";
import schema from "../models/devConnectModel";
import { paramsCheck as check } from "../utils/parametersCheck";

const requestManager = new Request();

const devConnectModule = module.exports;

devConnectModule.create = (body: any) => {
  return requestManager.create(
    {
      path: `/developer/connect`,
      method: "POST",
      schema,
    },
    body
  );
};

devConnectModule.get = (id: string) => {
  check(id);
  return requestManager.create({
    path: `/developer/connect/${id}/credentials`,
    method: "GET",
  });
};
