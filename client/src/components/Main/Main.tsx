import React from "react";
import { useGetAllInvoices } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import MainStyled from "./Main.styled";

function Main() {
  const { data, isLoading, error, isError } = useGetAllInvoices();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  console.log(data?.data);

  return (
    <MainStyled>
      <div className="main-header">
        <div className="header-title">
          <h1>Invoices</h1>
          <h2>{`There are ${data?.data.length} total invoices`}</h2>
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
    </MainStyled>
  );
}

export default Main;
