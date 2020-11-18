import Bluebird = require("bluebird");
import Request from "../requests";

export class Sources {
  requestManager: Request = new Request();

  list(code: string, total: number): Bluebird<unknown> {
    return this.requestManager.create({
      path: `/sources/list/${code}?total=${total}`,
      method: "GET",
    });
  }
}

export default new Sources();
