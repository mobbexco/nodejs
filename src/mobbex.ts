import configuration from "./configurations";
import { Configuration } from "./configurations";
import { Subscriber } from "./resources/subscribers";
import { Subscription } from "./resources/subscription";
import { Checkout } from "./resources/checkout";
import { PaymentOrder } from "./resources/paymentOrder";
import { DevConnect } from "./resources/devConnect";
import { PaymentCode } from "./resources/paymentCode";
import { Sources } from "./resources/sources";
import { Loyalty } from "./resources/loyalty";
import { Transaction } from "./resources/transactions";

export default class Mobbex {
  configurations: Configuration = configuration;
  subscribers = new Subscriber();
  subscriptions = new Subscription();
  checkout = new Checkout();
  paymentOrder = new PaymentOrder();
  devConnect = new DevConnect();
  paymentCode = new PaymentCode();
  sources = new Sources();
  loyalty = new Loyalty();
  transactions = new Transaction();
}
