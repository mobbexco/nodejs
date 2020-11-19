import { ValidationSchema } from "fastest-validator";

const schema: ValidationSchema = {
  total: "number",
  description: "string|max:255|optional",
  email: "email|optional",
  phone: "string|optional",
  reference: "string|optional",
  due: {
    type: "object",
    optional: true,
    props: {
      day: "number",
      month: "number",
      year: "number",
    },
  },
  secondDue: {
    type: "object",
    optional: true,
    props: {
      days: "number",
      surcharge: "number",
    },
  },
  actions: {
    type: "array",
    optional: true,
    items: "object",
  },
  return_url: {
    type: "string",
    optional: true,
    pattern: "^(http)",
  },
  webhook: {
    type: "string",
    optional: true,
    pattern: "^(http)",
  },
  items: {
    type: "array",
    optional: true,
    items: {
      type: "object",
      props: {
        image: "string|optional",
        quantity: "number|optional",
        description: "string|optional",
        total: "number",
      },
    },
  },
  options: {
    type: "object",
    optional: true,
    props: {
      domain: "string|optional",
      theme: {
        type: "object",
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
                pattern: "^(https)",
                optional: true,
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
  sources: {
    type: "array",
    optional: true,
    items: "string",
  },
};

export default schema;
