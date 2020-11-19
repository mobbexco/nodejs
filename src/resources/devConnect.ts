import Request from "../requests";
import schema from "../models/devConnectModel";
import { DevConnect as DevConnectModel } from "../types";

export class DevConnect {
  requestManager: Request = new Request();

  create(body: DevConnectModel): Promise<unknown> {
    return this.requestManager.create(
      {
        path: `/developer/connect`,
        method: "POST",
        schema,
      },
      body
    );
  }

  get(id: string): Promise<unknown> {
    return this.requestManager.create({
      path: `/developer/connect/${id}/credentials`,
      method: "GET",
    });
  }
}

export default new DevConnect();
