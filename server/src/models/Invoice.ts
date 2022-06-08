import { HydratedDocument, Model, Query, Schema, model } from "mongoose";

type SenderAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type ClientAddress = {
  street?: string;
  city?: string;
  postCode?: string;
  country?: string;
};

type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

// 1. Create an interface representing the document interface
interface IInvoice {
  id: string;
  createdAt: Date;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail?: string;
  status: string;
  senderAddress: SenderAddress;
  clientAddress?: ClientAddress;
  items: Item[];
  total: number;
}

type InvoiceModelType = Model<IInvoice, InvoiceQueryHelpers>;

// Query helpers should return `Query<any, Document<DocType>> & ProjectQueryHelpers`
// to enable chaining.
type InvoiceModelQuery = Query<
  any,
  HydratedDocument<IInvoice>,
  InvoiceQueryHelpers
> &
  InvoiceQueryHelpers;

// interface to declare query for model
interface InvoiceQueryHelpers {
  byId(this: InvoiceModelQuery, id: string): InvoiceModelQuery;
  byStatus(this: InvoiceModelQuery, status: string): InvoiceModelQuery;
}

// Declare schema for invoice
const invoiceSchema = new Schema<
  IInvoice,
  InvoiceModelType,
  {},
  InvoiceQueryHelpers
>({
  id: String,
  createdAt: {
    type: Date,
    required: true,
  },
  paymentDue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentTerms: {
    type: Number,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: String,
  status: String,
  clientAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  senderAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  total: {
    type: Number,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
  ],
});

// Query helper function by Id
invoiceSchema.query.byId = function (id: string) {
  return this.find({ id: `${id}` });
};

//Query helper function by status
invoiceSchema.query.byStatus = function (status: any) {
  return this.where({ status: `${status}` });
};

// Export schema
const Invoice = model<IInvoice, InvoiceModelType>("invoices", invoiceSchema);

export { Invoice };
