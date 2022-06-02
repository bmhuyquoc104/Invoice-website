import React from "react";
import { useGetInvoiceById } from "../../hooks/useInvoice";
import { useParams } from "react-router-dom";

function InvoiceDetail() {
  const { id } = useParams();
  const { data: invoice, isLoading, isError, error } = useGetInvoiceById(id!);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{`Error: ${error}`}</div>;
  }

  console.log(invoice?.data);
  console.log(id);
  return <div>InvoiceDetail</div>;
}

export default InvoiceDetail;
