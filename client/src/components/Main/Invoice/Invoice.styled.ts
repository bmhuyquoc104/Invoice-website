import styled from "styled-components";

const InvoiceStyled = styled.div`
  display: grid;
  align-items:center;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  grid-template-columns:5em 9em 1fr min-content min-content min-content;
  grid-template-rows:min-content;
  padding: 1em 1.5em;
  border-radius: 7px;
  :hover {
    border: 1px solid ${({ theme }) => theme.logo.backgroundColor};
  }
  .id {
    grid-column: 1/2;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 1.1;
    letter-spacing: -0.63px;
    color: ${({ theme }) => theme.text.color};
  }
  .paymentDue {
    grid-column: 2/3;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.subText.color};
    font-weight: 300;
  }
  .clientName {
    grid-column: 3/4;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.card.text.customer.color};
    font-weight: 300;
  }
  .total {
    grid-column: 4/5;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text.color};
  }

  .status {
    grid-column: 5/6;
    display: flex;
    align-items: center;
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
  img {
    grid-column: 6/7;
  }
  span {
    color: rgb(126, 136, 195);
  }
`;

export { InvoiceStyled };
