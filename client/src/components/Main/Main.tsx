import React from "react";
import { useGetAllInvoices } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import MainStyled from "./Main.styled";
import { Invoice as InvoiceType } from "../../api/invoice";
import Invoice from "./Invoice/Invoice";

function Main() {
  const { data: invoices, isLoading, error, isError } = useGetAllInvoices();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  console.log(invoices?.data);

    return (
      <MainStyled>
        <div className="main-header">
          <div className="header-title">
            <h1>Invoices</h1>
            <h2>{`There are ${invoices?.data.length} total invoices`}</h2>
          </div>
          <div className="header-control">
            <button className="filter">
              <p>Filter by status</p>
              <img src={imageResource.ArrowDown} alt="Arrow down" />
            </button>
            <button className="add">
              <img src={imageResource.Plus} alt="Plus" />
              <p>New invoice</p>
            </button>
          </div>
        </div>
        <div className="main-body">
          {invoices?.data.map((invoice: InvoiceType) => (
            <Invoice
              id={invoice.id}
              status={invoice.status}
              paymentDue={invoice.paymentDue}
              total={invoice.total}
              clientName={invoice.clientName}
            ></Invoice>
          ))}
        </div>
      </MainStyled>
    );
}

export default Main;
