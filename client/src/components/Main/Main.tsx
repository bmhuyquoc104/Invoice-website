import React from "react";
import { useGetAllInvoices } from "../../hooks/useInvoice";

function Main() {
  const { data, isLoading, error, isError } = useGetAllInvoices();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  console.log(data?.data);

  return <div>Main</div>;
}

export default Main;
