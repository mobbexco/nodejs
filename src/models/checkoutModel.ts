import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  test: "boolean|optional",
  total: "number",
  currency: "string",
  description: "string|max:255",
  return_url: {
    type: "string",
    pattern: "^(http)",
    optional: true,
  },
  reference: "string",
  webhook: {
    type: "string",
    pattern: "^(http)",
    optional: true,
  },
  redirect: {
    type: "string",
    pattern: "^(http)",
    optional: true,
  },
  timeout: "number|optional",
  installments: {
    type: "array",
    optional: true,
    items: {
      type: "string",
    },
  },
  intent: {
    type: "string",
    optional: true,
    enum: ["payment.v2", "payment.2-step"],
  },
  items: {
    type: "array",
    optional: true,
    items: {
      type: "object",
      props: {
        image: "string",
        quantity: "number",
        description: "string",
        total: "number",
      },
    },
  },
  sources: {
    type: "array",
    optional: true,
    items: "string",
  },
  customer: {
    type: "object",
    optional: true,
    props: {
      email: "email",
      identification: "string",
      name: "string",
      phone: "string|optional",
    },
  },
  options: {
    type: "object",
    optional: true,
    props: {
      domain: "string|optional",
      theme: {
        type: "object",
        optional: true,
        props: {
          type: {
            type: "string",
            optional: true,
            enum: ["light", "dark"],
          },
          background: {
            type: "string",
            optional: true,
            pattern: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
          },
          showHeader: "boolean|optional",
          header: {
            type: "object",
            optional: true,
            props: {
              name: "string|optional",
              logo: {
                type: "string",
                optional: true,
                pattern: "^(https)",
              },
            },
          },
          colors: {
            type: "object",
            optional: true,
            props: {
              primary: "string",
            },
          },
        },
      },
    },
  },
  split: {
    type: "array",
    optional: true,
    items: {
      type: "object",
      props: {
        tax_id: "string",
        total: "number",
        fee: "number",
        hold: "number|optional",
        description: "string|optional",
        reference: "string",
      },
    },
  },
  wallet: {
    type: "boolean",
    optional: true,
  },
};

export default schema;
