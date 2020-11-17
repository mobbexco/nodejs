import configurations from "./configurations";

export default class Mobbex {
  configurations = configurations as any;
  subscribers = require("./resources/subscribers");
  subscriptions = require("./resources/subscription");
  checkout = require("./resources/checkout");
  paymentOrder = require("./resources/paymentOrder");
  devConnect = require("./resources/devConnect");
  paymentCode = require("./resources/paymentCode");
  sources = require("./resources/sources");
  loyalty = require("./resources/loyalty");
  transactions = require("./resources/transactions");
}
