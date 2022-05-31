import { Schema, model } from "mongoose";

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
  createdAt: string;
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

// 2. Create a schema corresponding to the document interface
const invoiceSchema = new Schema<IInvoice>({
  id: String,
  createdAt: {
    type: String,
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

const Invoice = model<IInvoice>("invoices", invoiceSchema);

export { Invoice };
