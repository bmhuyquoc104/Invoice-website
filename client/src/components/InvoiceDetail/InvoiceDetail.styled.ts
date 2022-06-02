import styled from "styled-components";

const InvoiceDetailStyled = styled.div`
  display: flex;
  width: 70%;
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
    /* grid-column: 5/6; */
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
    gap: 0.5em;
    grid-template-columns: 10em 10em 1fr;
    grid-template-areas:
      "id . senderAddress"
      "createdAt clientAddress clientEmail"
      "paymentDue clientAddress ."
      "items items items"
      "total total total";
  }

  .id {
    grid-area: id;
  }
  .senderAddress {
    grid-area: senderAddress;
  }
  .createAt {
    grid-area: createAt;
  }
  .clientAddress {
    grid-area: clientAddress;
  }
  .clientEmail {
    grid-area: clientEmail;
  }
  .items {
    grid-area: items;
  }
  .total {
    grid-area: total;
  }
  .paymentDue {
    grid-area: paymentDue;
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
    .controller {
      display: none;
    }
    .status-detail {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
export default InvoiceDetailStyled;
