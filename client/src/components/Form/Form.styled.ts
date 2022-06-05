import styled from "styled-components";
import { motion } from "framer-motion";
import { imageResource } from "../../public/imageResources";
const FormStyled = styled(motion.form)`
  background-color: ${({ theme }) => theme.card.backgroundColor};
  width: max(40%, 600px);
  border-radius: 0 25px 25px 0;
  padding: 3em 3em 1em 3em;
  position: relative;
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
    width:100%;
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
    gap: 0.5em;
  }
  .bill-items label {
    color: var(--clr_label2_color);
    font-size: 1.125rem;
    font-weight: bold;
    letter-spacing: 0.25px;
  }
  .bill-items button {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
    color: ${({ theme }) => theme.label.color};
    border: none;
    font-size: 0.75rem;
    padding: 1.5em;
    font-weight: bold;
  }
  .bill-controller {
    display: flex;
    align-items: center;
    justify-content: space-between;
 
  }
  .discard {
    border-radius: 25px;
    background-color: ${({ theme }) => theme.button.edit.backgroundColor};
    color: ${({ theme }) => theme.label.color};
    font-size: 0.75rem;
    padding: 1.5em 2.25em;
    font-weight: bold;
    border: none;
  }
  .right-side {
    display: flex;
    gap: 0.5em;
    align-items: center;
  }
  .right-side button {
    font-size: 0.75rem;
    padding: 1.5em 2em;
    font-weight: bold;
    border: none;
    border-radius: 25px;
  }
  .draft {
    background-color: var(--clr_button_draft_bg);
    color: ${({ theme }) => theme.subText.color};
  }
  .save {
    background-color: var(--clr_logo);
    color: #ffffff;
  }
  .bill-body {
    gap: 2em;
    display: flex;
    flex-direction: column;
    height: calc(90%-10vh);
    overflow-y: scroll;
  }
`;

export default FormStyled;
