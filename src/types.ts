export interface Items {
  image?: string;
  quantity: number;
  description: string;
  total: number;
}

export interface Customer {
  email: string;
  identification: string;
  name: string;
  phone?: string;
}

export interface Options {
  type?: string;
  background?: string;
  showHeader?: boolean;
  header?: {
    name?: string;
    logo?: string;
  };
  colors?: {
    primary: string;
  };
  domain?: string;
}

export interface Split {
  tax_id: string;
  total: number;
  fee: number;
  hold?: string;
  description?: string;
  reference?: string;
}

export interface Checkout {
  test?: boolean;
  total: number;
  currency: string;
  description: string;
  return_url?: string;
  reference: string;
  webhook?: string;
  redirect?: string;
  timeout?: number;
  installments?: string[];
  intent?: string;
  items?: Items[];
  sources?: string[];
  customer?: Customer[];
  options?: Options;
  split?: Split[];
}

export interface Wallet extends Checkout {
  wallet: boolean;
}

export interface DevConnect {
  return_url: string;
}

export interface LoyaltyCharge {
  credential: string;
  tax_id: string;
  points: number;
  reference: string;
}

export interface LoyaltySearch {
  reference?: string;
  credential?: string;
}

export interface LoyaltyCreate {
  identification: string;
  email: string;
  credential?: string;
  tax_id: string;
  name?: string;
  phone?: string;
}

export interface PaymentCode {
  reference: string;
  total: number;
  expiration: string;
  email?: string;
  surchargeDays?: number;
  surchargeTotal?: number;
}

export interface PaymentOrder {
  total: number;
  description?: string;
  email?: string;
  phone?: string;
  reference?: string;
  due?: {
    day: number;
    month: number;
    year: number;
  };
  secondDue?: {
    days: number;
    surcharge: number;
  };
  actions?: Record<string, unknown>[];
  return_url?: string;
  webhook?: string;
  items?: Items[];
  options?: Options[];
  sources?: string[];
}

export interface Subscriber {
  customer: Customer;
  reference: string;
  startDay: {
    day: number;
    month: number;
  };
}

export interface Subscription {
  total: number;
  currency: string;
  name: string;
  description: string;
  type: string;
  interval: string;
  trial?: string;
  limit: number;
  webhook: string;
  return_url: string;
  features?: string;
}

export interface TransactionGet {
  page?: number;
  limit?: number;
  status?: number;
  currency?: string;
  context?: string;
  created_from?: string;
  created_to?: string;
  text?: string;
  reference?: string;
  test?: string;
}

export interface TransactionPost {
  page?: number;
  limit?: number;
  status?: number;
  currency?: string;
  context?: string;
  created?: {
    from: {
      day: string;
      month: string;
      year: string;
    };
    to: {
      day: string;
      month: string;
      year: string;
    };
  };
  text?: string;
  reference?: string;
  test?: string;
}
