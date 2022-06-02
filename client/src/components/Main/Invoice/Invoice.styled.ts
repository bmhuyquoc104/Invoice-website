import styled from "styled-components";

const InvoiceStyled = styled.div`
  display: grid;
  align-items: center;
  gap: 0.5em;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  grid-template-columns: 4em 7em 1fr 6em 6em min-content;
  grid-template-areas: "id paymentDue clientName total status img";
  padding: 1em 1.5em;
  border-radius: 7px;
  :hover {
    border: 1px solid ${({ theme }) => theme.logo.backgroundColor};
  }
  .id {
    /* grid-column: 1/2; */
    grid-area: id;
    font-weight: bold;
    font-size: 0.85rem;
    line-height: 1.1;
    letter-spacing: -0.63px;
    color: ${({ theme }) => theme.text.color};
  }
  .paymentDue {
    /* grid-column: 2/3; */
    grid-area: paymentDue;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.subText.color};
    font-weight: 300;
  }
  .clientName {
    /* grid-column: 3/4; */
    grid-area: clientName;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.card.text.customer.color};
    font-weight: 300;
  }
  .total {
    /* grid-column: 4/5; */
    grid-area: total;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text.color};
    justify-self: end;
    margin-right: 1em;
  }

  .status {
    /* grid-column: 5/6; */
    grid-area: status;
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
  img {
    grid-column: 6/7;
  }
  span {
    color: rgb(126, 136, 195);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 6em;
    grid-template-areas:
      "id clientName"
      "paymentDue status"
      "total status";
    img{
      display:none;
    } 
    .total{
      justify-self:revert;
    } 
    .id{
      margin-bottom:0.75em;
    }
    .clientName{
      justify-self:end;
    }
  }
`;

export { InvoiceStyled };
