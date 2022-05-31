import {
  getInvoice,
  getAllInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
} from "../api/invoice";

import { useQuery, useMutation } from "react-query";

const useGetAllInvoices = () => {
  return useQuery(["invoice"], getAllInvoices);
};

export { useGetAllInvoices };
