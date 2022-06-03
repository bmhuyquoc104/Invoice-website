import styled from "styled-components";

const InvoiceDetailStyled = styled.div`
  display: flex;
  width: 75%;
  padding: 4em 10em;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: 1em;
  & > * {
    border-radius: 10px;
  }
  .goBack {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 1.5em;
    background-color: transparent;
    border: none;
    font-weight: 300;
    color: ${({ theme }) => theme.text.color};
    font-size: 0.75rem;
    :hover {
      cursor: pointer;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 1em 1.5em;
    border-radius: 5px;
    text-transform: capitalize;
  }
  .status.paid {
    color: ${({ theme }) => theme.card.text.paid.color};
    background: ${({ theme }) => theme.card.text.paid.backgroundColor};
  }

  .status::before {
    content: "";
    padding: 0.3em;
    border-radius: 50%;
  }
  .status.paid::before {
    background-color: ${({ theme }) => theme.card.text.paid.color};
  }
  .status.pending::before {
    background-color: ${({ theme }) => theme.card.text.pending.color};
  }
  .status.draft::before {
    background-color: ${({ theme }) => theme.card.text.draft.color};
  }

  .status.pending {
    color: ${({ theme }) => theme.card.text.pending.color};
    background: ${({ theme }) => theme.card.text.pending.backgroundColor};
  }
  .status.draft {
    color: ${({ theme }) => theme.card.text.draft.color};
    background: ${({ theme }) => theme.card.text.draft.backgroundColor};
  }

  .sub-detail {
    background-color: ${({ theme }) => theme.card.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
  }
  .status-detail {
    display: flex;
    gap: 0.75em;
    align-items: center;
  }
  .status-detail > h2 {
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme.subText.color};
  }

  .status-detail > p {
    font-size: 0.75rem;
    font-weight: 300;
    color: ${({ theme }) => theme.subText.color};
  }

  .controller {
    display: flex;
    gap: 0.75em;
    font-size: 0.75rem;
    align-items: center;
  }
  .edit {
    color: ${({ theme }) => theme.subText.color};
    padding: 1em 1.5em;
    border-radius: 10rem;
    border: none;
    font-weight: bold;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
  }
  .delete {
    color: #ffffff;
    padding: 1em 1.5em;
    border-radius: 10rem;
    border: none;
    font-weight: bold;
    background-color: rgb(236, 87, 87);
  }
  .mark-as-paid {
    background-color: ${({ theme }) => theme.logo.backgroundColor};
    color: #ffffff;
    border-radius: 10rem;
    border: none;
    font-weight: bold;
    padding: 1em 1.5em;
  }

  .main-detail {
    background-color: ${({ theme }) => theme.card.backgroundColor};
    display: grid;
    padding: 1.5em;
    /* grid-template-columns: 10em 14em 1fr; */
    grid-template-areas:
      "id-description . senderAddress"
      "createdAt clientAddress clientEmail"
      "paymentDue clientAddress ."
      "items items items"
      "amount-total amount-total amount-total";
  }

  .id-description {
    grid-area: id-description;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .id {
    font-size: 1rem;
    color: ${({ theme }) => theme.text.color};
    display: flex;
    font-weight: bold;
  }

  .id > span {
    color: rgb(126, 136, 195);
  }

  .senderAddress {
    grid-area: senderAddress;
    justify-self: end;
    display: flex;
    gap: 0.5em;
    flex-direction: column;
    letter-spacing: 0.23px;
  }
  .senderAddress h2 {
    font-size: 0.6875rem;
    color: ${({ theme }) => theme.subText.color};
    font-weight: 300;
    text-align: right;
  }
  .createdAt {
    grid-area: createdAt;
  }
  .createdAt h2 {
    font-size: 0.75rem;
    flex-direction: column;
    color: ${({ theme }) => theme.subText.color};
  }

  .clientAddress,
  .clientAddress h2 {
    grid-area: clientAddress;
    display: flex;
    font-size: 0.6875rem;
    justify-self: center;
    gap: 0.75em;
    flex-direction: column;
    color: ${({ theme }) => theme.subText.color};
    font-weight: 300;
  }

  .clientEmail {
    grid-area: clientEmail;
  }
  .items {
    grid-area: items;
    margin-top: 3em;
    border-radius: 10px 10px 0 0px;
    padding: 2.5em 2em;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
  .item.itemName,
  .item.quantity,
  .item.price,
  .item.total {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }

  .itemName,
  .quantity,
  .price,
  .item.total {
    color: ${({ theme }) => theme.subText.color};
    font-size: 0.6875rem;
  }

  .itemName span,
  .quantity span,
  .price span,
  .item.total span {
    color: ${({ theme }) => theme.text.color};
    font-weight: bold;
    font-size: 0.75rem;
  }
  .item.quantity {
    text-align: center;
    margin-left: auto;
    margin-right: 4em;
  }
  .item.price {
    margin-right: auto;
  }
  .item.price,
  .item.total {
    text-align: right;
  }

  .amount-total {
    grid-area: amount-total;
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.total.backgroundColor};
    padding: 2em 2em;
    align-items: center;
    color: #ffffff;
    border-radius: 0 0 10px 10px;
  }
  .amount-total span {
    font-size: 1.5rem;
  }
  .paymentDue {
    grid-area: paymentDue;
    display: flex;
    font-size: 0.75rem;
    align-self: end;
    flex-direction: column;
    color: ${({ theme }) => theme.subText.color};
  }
  .description,
  .createdAt h2,
  .paymentDue h2,
  .clientEmail h2 {
    color: ${({ theme }) => theme.subText.color};
    font-size: 0.75rem;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .createdAt h2 span,
  .paymentDue h2 span,
  .clientEmail h2 span,
  .clientName {
    color: ${({ theme }) => theme.text.color} !important;
    font-size: 0.9375rem !important;
    margin-top: 0.25em;
    font-weight: bold !important;
  }
  .bottom-controller {
    display: none;
  }
  @media (max-width: 1170px) {
    width: 70%;
    padding: 4em;
  }

  @media (max-width: 900px) {
    width: 80%;
    padding: 4em 0;
  }

  @media (max-width: 620px) {
    width: 100%;
    padding: 3em 0 0 0;
    & > * {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .controller {
      display: none;
    }
    .status-detail {
      width: 100%;
      justify-content: space-between;
    }
    .bottom-controller {
      display: flex;
      width: 100%;
      border-radius: 0;
      gap: 0.5em;
      padding: 1.5em;
      background-color: ${({ theme }) => theme.header.backgroundColor};
      align-items: center;
    }
    .bottom-controller > .edit {
      margin-left: auto;
    }
    .main-detail {
      grid-template-columns: 6.5em 1fr;
      gap: 1em;
      /* "id-description . senderAddress"
      "createdAt clientAddress clientEmail"
      "paymentDue clientAddress ."
      "items items items"
      "amount-total amount-total amount-total"; */
      grid-template-areas:
        "id-description ."
        "senderAddress ."
        "createdAt clientAddress"
        "paymentDue clientAddress"
        "clientEmail ."
        "items items"
        "amount-total amount-total";
      .senderAddress {
        justify-self: start;
      }
      .senderAddress h2 {
        text-align:left;
      }
      .amount-total{
        margin-top:-1em;
      }
    }
  }
`;
export default InvoiceDetailStyled;
