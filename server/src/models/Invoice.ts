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
  },
  paymentDue: {
    type: String,
  },
  description: {
    type: String,
  },
  paymentTerms: {
    type: Number,
  },
  clientName: {
    type: String,
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
  total: {
    type: Number,
  },
  items: [
    {
      name: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      price: {
        type: Number,
      },
      total: {
        type: Number,
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
