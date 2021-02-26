import Request from "../requests";

export class Sources {
  requestManager: Request = new Request();

  list(total: number): Promise<unknown> {
    return this.requestManager.create({
      path: `/sources?total=${total}`,
      method: "GET",
    });
  }

  listAdvanced(rule: string): Promise<unknown> {
    return this.requestManager.create({
      path: `/sources/rules/${rule}/installments`,
      method: "GET",
    });
  }
}

export default new Sources();
