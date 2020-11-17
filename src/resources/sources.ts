import Request from "../requests";
import { paramsCheck as check } from "../utils/parametersCheck";

const requestManager = new Request();

const sourcesModule = module.exports;

sourcesModule.list = (code: string, total: number) => {
  let newTotal;
  if (typeof total !== "string" && typeof total !== "undefined") {
    newTotal = total.toString();
  }
  check(code);
  check(newTotal);
  return requestManager.create({
    path: `/sources/list/${code}?total=${total}`,
    method: "GET",
  });
};
