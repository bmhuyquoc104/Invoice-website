import styled from "styled-components";
import { motion } from "framer-motion";
import { imageResource } from "../../public/imageResources";
const FormStyled = styled(motion.form)`
  background-color: ${({ theme }) => theme.form.backgroundColor};
  width: max(50%, 600px);
  border-radius: 0 50px 50px 0;
  padding: 3em 2em 5em 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  h2 {
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text.color};
    font-weight: bold;
    padding: 0 1.5em;
  }
  h2 > span {
    color: rgb(136, 142, 176);
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
    padding: 0 1.5em;
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
    padding: 0 1.5em;
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
    padding: 0 1.5em;
  }
  .bill-items {
    display: flex;
    flex-direction: column;
    padding: 0 1.5em;

    gap: 1.5em;
  }
  .bill-items > label {
    color: var(--clr_label2_color);
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: 0.25px;
  }
  .bill-total {
    padding: 0 1.5em;
  }
  .item {
    display: grid;
    grid-template-columns: 1fr 4em 7em 5em min-content;
    grid-template-areas: "item-name item-quantity item-price item-total item-remove";
    align-items: stretch;
    gap: 1em;
  }
  .item > * {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
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
    height: 4rem;
    align-self: center;
    :hover {
      cursor: pointer;
      color: rgb(236, 87, 87);
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
    padding: 0 1.5em;
    padding-bottom: 2em;
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
    position: relative;
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
    position: relative;
    background-color: var(--clr_logo);
    color: #ffffff;
    :hover {
      background-color: var(--clr_logo2);
      cursor: pointer;
    }
    :disabled {
      opacity: 0.3;
    }
    :disabled:hover {
      cursor: default;
      background-color: var(--clr_logo);
    }
    :disabled:hover + .button-message {
      display: flex;
    }
  }
  .button-message {
    position: absolute;
    display: none;
    background-color: transparent;
    font-size: 0.75rem;
    right: -10px;
    top: -25px;
    font-weight: bold;
    color: rgb(236, 87, 87);
  }
  .bill-body {
    gap: 2em;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  .error input {
    border: 1px solid rgb(236, 87, 87);
  }
  .message {
    font-size: 0.685rem;
    color: rgb(236, 87, 87);
    outline: none;
  }
  .success input {
    outline: none;
    border: 1px solid ${({ theme }) => theme.input.border};
  }
  .bill-controller.edit{
    background-color:transparent;
    :hover{
      background-color:transparent;
    }
  }
  .bill-controller.edit .right-side{
      margin-left: auto;
  }

  @media (max-width: 900px) {
    padding: 3em 3em 5em 3em;
    border-radius: 0px 25px 25px 0px;
  }
  @media (max-width: 600px) {
    border-radius: 0;
    .bill-form,
    .bill-to,
    .description,
    .bill-total,
    .bill-date,
    .bill-items {
      padding: 0 0.25em;
    }
    .bill-controller {
      padding: 0 0.25em 2em 0;
    }

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
    .button-message {
      right: -5px;
    }
  }
`;

export default FormStyled;
