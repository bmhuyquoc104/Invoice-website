import styled from "styled-components";
import { motion } from "framer-motion";
import { imageResource } from "../../public/imageResources";
const FormStyled = styled(motion.form)`
  background-color: ${({ theme }) => theme.form.backgroundColor};
  width: max(50%, 600px);
  border-radius: 0 20px 20px 0;
  padding: 3em 4em 1em 4em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  h2 {
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text.color};
    font-weight: bold;
  }
  h3 {
    font-size: 0.75rem;
    color: var(--clr_logo);
    letter-spacing: 0.25px;
  }
  input,
  select {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card.backgroundColor};
    color: ${({ theme }) => theme.text.color};
    outline: none;
    border: 1px solid ${({ theme }) => theme.input.border};
    padding: 1.35em 1em;
    font-weight: bold;
    width: 100%;
    font-size: 0.75rem;
    line-height: 1.125;
  }
  input:focus {
    border: 1px solid var(--clr_logo);
  }
  .bill-form,
  .bill-to {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .bill-form {
    grid-template-areas:
      "h3 h3 h3"
      "street street street"
      "city postcode country";
  }
  .bill-form h3 {
    grid-area: h3;
  }
  .bill-form .street {
    grid-area: street;
  }
  .bill-form .city {
    grid-area: city;
  }
  .bill-form .post-code {
    grid-area: postcode;
  }
  .bill-form .country {
    grid-area: country;
  }
  .bill-form > * {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  label {
    color: ${({ theme }) => theme.label.color};
    font-size: 0.75rem;
    letter-spacing: -0.25px;
    font-weight: 300;
  }

  .bill-to > * {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .bill-to {
    grid-template-areas:
      "h3 h3 h3"
      "clientName clientName clientName"
      "clientEmail clientEmail clientEmail"
      "street street street"
      "city postcode country";
  }
  .bill-to h3 {
    grid-area: h3;
  }
  .bill-to .street {
    grid-area: street;
  }
  .bill-to .city {
    grid-area: city;
  }
  .bill-to .post-code {
    grid-area: postcode;
  }
  .bill-to .country {
    grid-area: country;
  }
  .bill-to .clientName {
    grid-area: clientName;
  }
  .bill-to .clientEmail {
    grid-area: clientEmail;
  }
  .bill-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bill-date > * {
    width: 47%;
  }
  .invoice-date,
  .payment-terms {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .invoice-date input {
    background-image: url(${imageResource.Calendar});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
    -webkit-appearance: none;
  }

  select {
    background-image: url(${imageResource.ArrowDown});
    background-repeat: no-repeat;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background-position-x: 90%;
    background-position-y: 50%;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .bill-items {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  .bill-items > label {
    color: var(--clr_label2_color);
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: 0.25px;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr 4em 7em 5em min-content;
    grid-template-areas: "item-name item-quantity item-price item-total item-remove";
    align-items: center;
    gap: 1em;
  }
  .item > * {
    display: flex;
    flex-direction: column;
    gap: 0.625em;
  }

  .item-name {
    grid-area: item-name;
  }
  .item-quantity {
    grid-area: item-quantity;
  }
  .item-price {
    grid-area: item-price;
  }
  .item-total {
    grid-area: item-total;
  }
  .item-total input {
    color: rgb(136, 142, 176);
    background: transparent;
    border: none;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: -0.25px;
  }
  .item-remove {
    grid-area: item-remove;
    width: 25px;
    color: #878eaf;
    height: 3rem;
    align-self: end;
    :hover {
      cursor: pointer;
      color: var(--clr_logo);
    }
  }

  .bill-items button {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
    color: ${({ theme }) => theme.label.color};
    border: none;
    font-size: 0.75rem;
    padding: 1.5em;
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.hover.discard.backgroundColor};
    }
    font-weight: bold;
  }
  .bill-controller {
    display: flex;
    padding: 2em 0;
    align-items: center;
    justify-content: space-between;
  }
  .discard {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
    color: ${({ theme }) => theme.label.color};
    font-size: 0.75rem;
    padding: 1.4em 2.15em;
    font-weight: bold;
    border: none;
    :hover {
      background-color: ${({ theme }) => theme.hover.discard.backgroundColor};
      cursor: pointer;
    }
  }
  .right-side {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }
  .right-side button {
    font-size: 0.75rem;
    padding: 1.4em 1.9em;
    font-weight: bold;
    border: none;
    border-radius: 25px;
  }
  .draft {
    background-color: var(--clr_button_draft_bg);
    color: ${({ theme }) => theme.subText.color};
    :hover {
      background-color: rgb(12, 14, 22);
      cursor: pointer;
    }
  }
  .save {
    background-color: var(--clr_logo);
    color: #ffffff;
    :hover {
      background-color: var(--clr_logo2);
      cursor: pointer;
    }
  }
  .bill-body {
    gap: 2em;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  @media (max-width: 900px) {
    padding: 3em 3em 5em 3em;
  }
  @media (max-width: 600px) {
    border-radius: 0;
    .bill-form,
    .bill-to {
      gap: 1em;
      grid-template-columns: 1fr 1fr;
    }
    .bill-form {
      grid-template-areas:
        "h3 h3"
        "street street"
        "city postcode"
        "country country";
    }
    .bill-to {
      grid-template-areas:
        "h3 h3"
        "clientName clientName"
        "clientEmail clientEmail"
        "street street"
        "city postcode"
        "country country";
    }
    .item {
      grid-template-columns: 4em 1fr 1fr 5em;
      grid-template-areas:
        "item-name item-name item-name item-name"
        "item-quantity item-price item-total item-remove";
    }
    .item-remove {
      justify-self: end;
    }
  }
  @media (max-width: 480px) {
    padding: 2em 1em 5em 1em;
  }
  @media (max-width: 400px) {
    padding: 2em 0.75em 5em 0.75em;
    .right-side {
      gap: 0.25em;
    }
  }
`;

export default FormStyled;
