import { IoMdTrash } from "react-icons/io";
import React, { useId, useState, useRef, useEffect, useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormStyled from "./Form.styled";
import { RefContext } from "../../hooks/useRefContext";
import { AbsoluteFormContainer } from "../AbsoluteFlexModel/AbsoluteFlexModel";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type FormProps = {
  handleCloseForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};

type Item = {
  itemName: string;
  itemQuantity: string;
  itemPrice: string;
  itemTotal: string;
};
function Form({ handleCloseForm, show }: FormProps) {
  const dateRef = useRef<any>(null);
  const [startDate, setStartDate] = useState(new Date());
  const defaultDate = format(startDate, "dd MMM yyyy");
  console.log(defaultDate);
  console.log(startDate);
  // Get the header ref from header component
  const { headerRef } = useContext(RefContext);
  //Ref the whole contain in side the form
  const containRef = useRef<any>(null);
  // State to manage fields in item list
  const [itemListFields, setItemListFields] = useState<Item[]>([]);

  // Check if the client click outside or not
  useEffect(() => {
    const handleClose = (e: any) => {
      if (
        containRef.current &&
        !containRef.current.contains(e.target) &&
        !headerRef.current.contains(e.target)
      ) {
        handleCloseForm(e);
      }
    };
    document.addEventListener("click", handleClose, true);
    return () => document.removeEventListener("click", handleClose, true);
  }, [handleCloseForm]);
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

  // Declare schema for form fields
  const schema = yup
    .object()
    .shape({
      billFromStreet: yup.string().required("Please do not leave it blank"),
      billFromCity: yup.string().required("Please do not leave it blank"),
      billFromCountry: yup.string().required("Please do not leave it blank"),
      billFromPostcode: yup.string().required("Please do not leave it blank"),
      billToStreet: yup.string().required("Please do not leave it blank"),
      billToCity: yup.string().required("Please do not leave it blank"),
      billToCountry: yup.string().required("Please do not leave it blank"),
      billToPostcode: yup.string().required("Please do not leave it blank"),
      billToClientName: yup.string().required("Please do not leave it blank"),
      billToClientEmail: yup.string().required("Please do not leave it blank"),
      paymentTerms: yup.string().required("Please select paymentTerms"),
      itemName: yup.string().required("Please do not leave it blank"),
      itemPrice: yup.string().required("Please do not leave it blank"),
      itemQuantity: yup.string().required("Please do not leave it blank"),
      invoiceDate: yup.string(),
      itemTotal: yup.string(),
      description: yup.string().required("Please do not leave it blank"),
    })
    .required();

  // Declare form default values
  const formDefaultValue = {
    billFromStreet: "",
    billFromCity: "",
    billFromPostcode: "",
    billFromCountry: "",
    billToCountry: "",
    billToPostcode: "",
    billToStreet: "",
    billToClientName: "",
    billToCity: "",
    billToClientEmail: "",
    paymentTerms: "Net 30 days",
    itemName: "",
    itemPrice: "",
    itemQuantity: "",
    itemTotal: "0",
    description: "",
  };

  //Declare react hook From with its props
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { touchedFields, isValid },
    formState,
  } = useForm({
    defaultValues: formDefaultValue,
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
  //   {
  //     control, // control props comes from useForm (optional: if you are using FormContext)
  //     name: "item", // unique name for your Field Array
  //   }
  // );
  const onSubmit = (data: any) => {
    const invoiceDate = format(startDate, "dd MMM yyyy");
    data = { ...data, invoiceDate: invoiceDate };
    console.log(data);
  };

  return (
    <AbsoluteFormContainer>
      <FormStyled
        onSubmit={handleSubmit(onSubmit)}
        ref={containRef}
        initial={{ x: -300, opacity: 0 }}
        exit={{
          x: -1000,
          transition: {
            duration: 0.4,
          },
        }}
        animate={{
          x: 0,
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
              <input
                {...register("billFromStreet")}
                id={bfStreet}
                name="billFromStreet"
                type="text"
              />
            </div>
            <div className="city">
              <label htmlFor={bfCity}>City</label>
              <input
                {...register("billFromCity")}
                name="billFromCity"
                id={bfCity}
                type="text"
              />
            </div>
            <div className="post-code">
              <label htmlFor={bfPostcode}>Post Code</label>
              <input
                {...register("billFromPostcode")}
                id={bfPostcode}
                name="billFromPostcode"
                type="text"
              />
            </div>
            <div className="country">
              <label htmlFor={bfCountry}>Country</label>
              <input
                {...register("billFromCountry")}
                name="billFromCountry"
                id={bfCountry}
                type="text"
              />
            </div>
          </div>
          <div className="bill-to">
            <h3>Bill To</h3>
            <div className="clientName">
              <label htmlFor={btClientName}>Client's Name</label>
              <input
                {...register("billToClientName")}
                id={btClientName}
                type="text"
                name="billToClientName"
              />
            </div>
            <div className="clientEmail">
              <label htmlFor={btClientEmail}>Client's Email</label>
              <input
                {...register("billToClientEmail")}
                id={btClientEmail}
                type="text"
                name="billToClientEmail"
              />
            </div>
            <div className="street">
              <label htmlFor={btStreet}>Street Address</label>
              <input
                {...register("billToStreet")}
                name="billToStreet"
                id={btStreet}
                type="text"
              />
            </div>
            <div className="city">
              <label htmlFor={btCity}>City</label>
              <input
                {...register("billToCity")}
                name="billToCity"
                id={btCity}
                type="text"
              />
            </div>
            <div className="post-code">
              <label htmlFor={btPostcode}>Post Code</label>
              <input
                {...register("billToPostcode")}
                name="billToPostcode"
                id={btPostcode}
                type="text"
              />
            </div>
            <div className="country">
              <label htmlFor={btCountry}>Country</label>
              <input
                {...register("billToCountry")}
                name="billToCountry"
                id={btCountry}
                type="text"
              />
            </div>
          </div>
          <div className="bill-date">
            <div className="invoice-date">
              <label htmlFor="date">Invoice Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date!)}
                minDate={new Date()}
                dateFormat="dd MMM yyyy"
              />
            </div>
            <div className="payment-terms">
              <label htmlFor={btCountry}>Payment Terms</label>
              <select
                defaultValue={"Net 30 days"}
                id={bdPaymentTerms}
                {...register("paymentTerms")}
                name="paymentTerms"
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
                id={bdDescription}
                {...register("description")}
                name="description"
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
                  <input
                    {...register("itemName")}
                    id={ilItemName}
                    name="itemName"
                    type="text"
                  />
                </div>
                <div className="item-quantity">
                  <label htmlFor={ilItemQuantity}>Qty</label>
                  <input
                    {...register("itemQuantity")}
                    id={ilItemQuantity}
                    name="itemQuantity"
                    type="text"
                  />
                </div>
                <div className="item-price">
                  <label htmlFor={ilItemPrice}>Price</label>
                  <input
                    {...register("itemPrice")}
                    name="itemPrice"
                    id={ilItemPrice}
                    type="text"
                  />
                </div>
                <div className="item-total">
                  <label htmlFor={ilItemTotal}>Total</label>
                  <input
                    {...register("itemTotal")}
                    name="itemTotal"
                    id={ilItemTotal}
                    value="0"
                    readOnly
                  />
                </div>
                <IoMdTrash className="item-remove" onClick={removeItemInList} />
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
            <button className="draft" disabled={!isValid}>
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
