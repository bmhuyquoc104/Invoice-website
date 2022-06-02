import {
  getInvoice,
  getAllInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
} from "../api/invoice";

import { useQuery, useMutation } from "react-query";

const useGetAllInvoices = () => {
  return useQuery(["invoices"], getAllInvoices);
};

const useGetInvoiceById = (id: string) => {
  return useQuery(["invoice", id], () => getInvoice(id), {
    enabled: Boolean(id),
  });
};


export { useGetAllInvoices, useGetInvoiceById };
