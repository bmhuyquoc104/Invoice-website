import { IoMdTrash } from "react-icons/io";
import React, { useId, useState, useRef } from "react";
import FormStyled from "./Form.styled";
import { AbsoluteFormContainer } from "../AbsoluteFlexModel/AbsoluteFlexModel";

type FormProps = {
  handleCloseForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type Item = {
  itemName: string;
  itemQuantity: string;
  itemPrice: string;
  itemTotal: string;
};
function Form({ handleCloseForm }: FormProps) {
  const dateRef = useRef();

  // State to manage fields in item list
  const [itemListFields, setItemListFields] = useState<Item[]>([]);

  // Function to add more items in itemList
  const addItemInList = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItemListFields([
      ...itemListFields,
      { itemName: "", itemQuantity: "", itemPrice: "", itemTotal: "" },
    ]);
  };

  // Function to remove item in itemList
  const removeItemInList = (index: any) => {
    const newItemList = [...itemListFields];
    newItemList.splice(index, 1);
    setItemListFields(newItemList);
  };
  // Declare list of ids for all fields in the form
  const bfStreet = useId();
  const bfCity = useId();
  const bfCountry = useId();
  const bfPostcode = useId();
  const btStreet = useId();
  const btCity = useId();
  const btCountry = useId();
  const btPostcode = useId();
  const btClientName = useId();
  const btClientEmail = useId();
  const bdInvoiceDate = useId();
  const bdPaymentTerms = useId();
  const bdDescription = useId();
  const ilItemName = useId();
  const ilItemPrice = useId();
  const ilItemTotal = useId();
  const ilItemQuantity = useId();

  return (
    <AbsoluteFormContainer>
        <FormStyled
          initial={{ x: -300, opacity: 0 }}
          exit={{
            x: -1000,
            transition: {
              duration: 0.4,
            },
          }}
          animate={{
            x: 20,
            opacity: 1,
            transition: {
              duration: 0.4,
              type: "spring",
            },
          }}
        >
          <h2>Create Invoice</h2>
          <div className="bill-body">
            <div className="bill-form">
              <h3>Bill Form</h3>
              <div className="street">
                <label htmlFor={bfStreet}>Street Address</label>
                <input name="billFormStreet" id={bfStreet} type="text" />
              </div>
              <div className="city">
                <label htmlFor={bfCity}>City</label>
                <input name="billFormCity" id={bfCity} type="text" />
              </div>
              <div className="post-code">
                <label htmlFor={bfPostcode}>Post Code</label>
                <input name="billFormPostcode" id={bfPostcode} type="text" />
              </div>
              <div className="country">
                <label htmlFor={bfCountry}>Country</label>
                <input name="billFormCountry" id={bfCountry} type="text" />
              </div>
            </div>
            <div className="bill-to">
              <h3>Bill To</h3>
              <div className="clientName">
                <label htmlFor={btClientName}>Client's Name</label>
                <input name="billToClientName" id={btClientName} type="text" />
              </div>
              <div className="clientEmail">
                <label htmlFor={btClientEmail}>Client's Email</label>
                <input
                  name="billToClientEmail"
                  id={btClientEmail}
                  type="text"
                />
              </div>
              <div className="street">
                <label htmlFor={btStreet}>Street Address</label>
                <input name="billToStreet" id={btStreet} type="text" />
              </div>
              <div className="city">
                <label htmlFor={btCity}>City</label>
                <input name="billToCity" id={btCity} type="text" />
              </div>
              <div className="post-code">
                <label htmlFor={btPostcode}>Post Code</label>
                <input name="billToPostcode" id={btPostcode} type="text" />
              </div>
              <div className="country">
                <label htmlFor={btCountry}>Country</label>
                <input name="billToCountry" id={btCountry} type="text" />
              </div>
            </div>
            <div className="bill-date">
              <div className="invoice-date">
                <label htmlFor={bdInvoiceDate}>Invoice Date</label>
                <input name="invoiceDate" id={bdInvoiceDate} type="date" />
              </div>
              <div className="payment-terms">
                <label htmlFor={btCountry}>Payment Terms</label>
                <select
                  defaultValue={"Net 30 days"}
                  name="paymentTerms"
                  id={bdPaymentTerms}
                >
                  <option value="Net 1 day">Net 1 day</option>
                  <option value="Net 7 days">Net 7 days</option>
                  <option value="Net 14 days">Net 14 days</option>
                  <option value="Net 30 days">Net 30 days</option>
                </select>
              </div>
            </div>
            <div className="bill-description">
              <div className="description">
                <label htmlFor={bdDescription}>Description</label>
                <input
                  name="description"
                  id={bdDescription}
                  placeholder="e.g Graphic Design Service"
                  type="text"
                />
              </div>
            </div>
            <div className="bill-items">
              <label htmlFor="items">ItemList</label>
              {itemListFields.map((item, index: any) => (
                <div className="item" key={index}>
                  <div className="item-name">
                    <label htmlFor={ilItemName}>Item Name</label>
                    <input name="itemName" id={ilItemName} type="text" />
                  </div>
                  <div className="item-quantity">
                    <label htmlFor={ilItemQuantity}>Item Quantity</label>
                    <input
                      name="itemQuantity"
                      id={ilItemQuantity}
                      type="text"
                    />
                  </div>
                  <div className="item-price">
                    <label htmlFor={ilItemPrice}>Item Price</label>
                    <input name="itemPrice" id={ilItemPrice} type="text" />
                  </div>
                  <div className="item-total">
                    <label htmlFor={ilItemTotal}>Item Total</label>
                    <input name="itemTotal" id={ilItemTotal} readOnly />
                  </div>
                  <IoMdTrash onClick={removeItemInList} />
                </div>
              ))}
              <button onClick={addItemInList}>+ Add New Item</button>
            </div>
          </div>
          <div className="bill-controller">
            <button className="discard" onClick={handleCloseForm}>
              Discard
            </button>
            <div className="right-side">
              <button className="draft" type="submit">
                Save as Draft
              </button>
              <button className="save" type="submit">
                Save & Send
              </button>
            </div>
          </div>
        </FormStyled>
    </AbsoluteFormContainer>
  );
}

export default Form;
