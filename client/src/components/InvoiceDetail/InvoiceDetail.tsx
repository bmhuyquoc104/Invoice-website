import React from "react";
import { useGetInvoiceById } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import { Item } from "../../api/invoice";
import { formatDate } from "../../helper/FormatDate";
import { currency } from "../../helper/FormatCurrency";
import InvoiceDetailStyled from "./InvoiceDetail.styled";
import { useParams, useNavigate } from "react-router-dom";

function InvoiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: invoice, isLoading, isError, error } = useGetInvoiceById(id!);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{`Error: ${error}`}</div>;
  }
  console.log(invoice?.data);
  return (
    <InvoiceDetailStyled>
      <div>
        <button className="goBack" onClick={() => navigate(-1)}>
          <img src={imageResource.ArrowLeft} alt="Arrow Left" />
          Go back
        </button>
      </div>
      <div className="sub-detail">
        <div className="status-detail">
          <h2>Status</h2>
          {invoice?.data.status === "paid" && (
            <p className="status paid">{invoice?.data.status}</p>
          )}
          {invoice?.data.status === "pending" && (
            <p className="status pending">{invoice?.data.status}</p>
          )}
          {invoice?.data.status === "draft" && (
            <p className="status draft">{invoice?.data.status}</p>
          )}
        </div>
        <div className="controller">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
          {invoice?.data.status === "pending" ||
          invoice?.data.status === "draft" ? (
            <button className="mark-as-paid">Mark As Paid</button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="main-detail">
        <div className="id-description">
          <h2 className="id">
            <span>#</span>
            {invoice?.data.id}
          </h2>
          <h2 className="description">{invoice?.data.description}</h2>
        </div>
        <div className="senderAddress">
          <h2>{invoice?.data.senderAddress.street}</h2>
          <h2>{invoice?.data.senderAddress.city}</h2>
          <h2>{invoice?.data.senderAddress.postCode}</h2>
          <h2>{invoice?.data.senderAddress.country}</h2>
        </div>
        <div className="createdAt">
          <h2>
            Invoice Date: <span>{formatDate(invoice?.data.createdAt)}</span>
          </h2>
        </div>
        <div className="clientAddress">
          <p>Bill To</p>
          <h2 className="clientName">{invoice?.data.clientName}</h2>
          <h2>{invoice?.data.clientAddress.street}</h2>
          <h2>{invoice?.data.clientAddress.city}</h2>
          <h2>{invoice?.data.clientAddress.postCode}</h2>
          <h2>{invoice?.data.clientAddress.country}</h2>
        </div>
        <div className="clientEmail">
          <h2>
            Sent to <span>{invoice?.data.clientEmail}</span>
          </h2>
        </div>
        <div className="paymentDue">
          <h2>
            Payment Due: <span>{formatDate(invoice?.data.paymentDue)}</span>
          </h2>
        </div>
        <div className="items">
          {invoice?.data.items.map((item: Item, index: any) => (
            <div key={index} className="item">
              <div className="item itemName">
                Item Name <span> {item.name}</span>
              </div>
              <div className="item quantity">
                QTY. <span> {item.quantity}</span>
              </div>
              <div className="item price">
                Price <span> {currency(item.price)}</span>
              </div>
              <div className="item total">
                Total <span> {currency(item.total)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="amount-total">
          Amount Due <span>{currency(invoice?.data.total)}</span>
        </div>
      </div>
      <div className="bottom-controller">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
        {invoice?.data.status === "pending" ||
        invoice?.data.status === "draft" ? (
          <button className="mark-as-paid">Mark As Paid</button>
        ) : (
          <></>
        )}
      </div>
    </InvoiceDetailStyled>
  );
}

export default InvoiceDetail;
