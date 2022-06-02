import axios from "axios";

const api = axios.create({
  baseURL: "https://bmhuyquoc104-invoice-app.herokuapp.com/",
});

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

export type Invoice = {
  id: string;
  _id:string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  clientAddress: ClientAddress;
  senderAddress: SenderAddress;
  total: number;
  items: Item[];
};
// Function to get all invoices
const getAllInvoices = () => api.get("/invoice");

// Function to get one invoice
const getInvoice = (id: string) => api.get(`/invoice/${id}`);

// Function to add new invoice
const addInvoice = (newInvoice: Invoice) => api.post(`/invoice`, newInvoice);

// Function to edit invoice
const editInvoice = (id: string, newInvoice: Invoice) =>
  api.put(`/invoice/${id}`, newInvoice);

// Function to delete invoice
const deleteInvoice = (id: string) => api.delete(`/invoice/${id}`);

// Export functions 
export { getAllInvoices, getInvoice, addInvoice, editInvoice, deleteInvoice };