import {
  getInvoice,
  getAllInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
  getInvoicesByStatus,
} from "../api/invoice";

import { Invoice } from "../api/invoice";

import { useQuery, useMutation, useQueryClient } from "react-query";

// Hook to get all invoices
const useGetAllInvoices = () => {
  return useQuery(["invoices"], getAllInvoices);
};

// Hook to get invoice by Id
const useGetInvoiceById = (id: string) => {
  return useQuery(["invoice", id], () => getInvoice(id), {
    enabled: Boolean(id),
  });
};

// Hook to get all invoices by status
const useGetInvoicesByStatus = (status: string) => {
  return useQuery(["invoices", status], () => getInvoicesByStatus(status), {
    keepPreviousData: true,
  });
};

// Hook to add new invoice
const useAddInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(addInvoice, {
    onSuccess: (data) => {
      queryClient.setQueriesData(["invoice"], (oldData: any) => {
        return {
          ...oldData,
          data: [data.data, ...oldData.data],
        };
      });
    },
  });
};

export {
  useGetAllInvoices,
  useGetInvoiceById,
  useGetInvoicesByStatus,
  useAddInvoice,
};
