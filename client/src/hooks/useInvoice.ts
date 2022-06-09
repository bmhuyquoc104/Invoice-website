import {
  getInvoice,
  getAllInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
  updateInvoiceStatus,
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
    onSuccess: () => {
      queryClient.invalidateQueries(["invoices"]);
    },
  });
};

// Hook to delete invoice
const useDeleteInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteInvoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(["invoices"]);
    },
  });
};

// Hook to update status
const useUpdateStatusInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(updateInvoiceStatus, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["invoice", variables.id], data);
    },
  });
};

// Hook to update invoice
const useEditInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation(editInvoice, {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["invoice", variables._id], data);
    },
  });
};

export {
  useGetAllInvoices,
  useGetInvoiceById,
  useGetInvoicesByStatus,
  useAddInvoice,
  useDeleteInvoice,
  useUpdateStatusInvoice,
  useEditInvoice,
};
