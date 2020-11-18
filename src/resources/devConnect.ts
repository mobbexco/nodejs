import Request from "../requests";
import schema from "../models/devConnectModel";
import Bluebird = require("bluebird");

export class DevConnect {
  requestManager: Request = new Request();

  create(body: Record<string, unknown>): Bluebird<unknown> {
    return this.requestManager.create(
      {
        path: `/developer/connect`,
        method: "POST",
        schema,
      },
      body
    );
  }

  get(id: string): Bluebird<unknown> {
    return this.requestManager.create({
      path: `/developer/connect/${id}/credentials`,
      method: "GET",
    });
  }
}

export default new DevConnect();
