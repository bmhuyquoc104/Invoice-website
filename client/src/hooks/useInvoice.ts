import {
  getInvoice,
  getAllInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
  getInvoicesByStatus,
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

const useGetInvoicesByStatus = (status: string) => {
  return useQuery(
    ["invoice", status],
    () => getInvoicesByStatus(status),
    {
      keepPreviousData: true,
    }
  );
};

export { useGetAllInvoices, useGetInvoiceById, useGetInvoicesByStatus };
