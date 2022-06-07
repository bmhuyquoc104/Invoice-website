import { IoMdTrash } from "react-icons/io";
import { format, addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useId, useState, useRef, useEffect, useContext } from "react";
import FormStyled from "./Form.styled";
import { RefContext } from "../../hooks/useRefContext";
import { AbsoluteFormContainer } from "../AbsoluteFlexModel/AbsoluteFlexModel";
import Total from "./Total";
import TotalPerItem from "./TotalPerItem";

type FormProps = {
  handleCloseForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
};
type SenderAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

type ClientAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
type Item = {
  name: string;
  quantity?: number;
  price?: number;
  total?: number;
};

export type FormValue = {
  description: string;
  clientAddress: ClientAddress;
  senderAddress: SenderAddress;
  paymentTerms: string;
  id: string;
  clientEmail: string;
  total: number;
  clientName: string;
  items: Item[];
};

function Form({ handleCloseForm }: FormProps) {
  const [total, setTotal] = useState(0);

  const [startDate, setStartDate] = useState(new Date());
  const [status, setStatus] = useState<string>("");
  // Get the header ref from header component
  const { headerRef } = useContext(RefContext);
  //Ref the whole contain in side the form
  const containRef = useRef<any>(null);
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
      senderAddress: yup
        .object()
        .shape({
          billFromStreet: yup.string().required("Please do not leave it blank"),
          billFromCity: yup.string().required("Please do not leave it blank"),
          billFromCountry: yup
            .string()
            .required("Please do not leave it blank"),
          billFromPostcode: yup
            .string()
            .required("Please do not leave it blank"),
        })
        .required(),
      clientAddress: yup
        .object()
        .shape({
          billToStreet: yup.string().required("Please do not leave it blank"),
          billToCity: yup.string().required("Please do not leave it blank"),
          billToCountry: yup.string().required("Please do not leave it blank"),
          billToPostcode: yup.string().required("Please do not leave it blank"),
          billToClientName: yup
            .string()
            .required("Please do not leave it blank"),
          billToClientEmail: yup
            .string()
            .required("Please do not leave it blank"),
        })
        .required(),

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
  const formDefaultValue: FormValue = {
    paymentTerms: "Net 30 days",
    description: "",
    id: `${useId()}`,
    clientEmail: "",
    total: 0,
    clientName: "",
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "",
        total: 0,
      },
    ],
  };

  //Declare react hook From with its props
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { touchedFields, isValid },
    formState,
  } = useForm<FormValue>({
    defaultValues: formDefaultValue,
  });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });
  const onSubmit = (data: any) => {
    const invoiceDate = format(startDate, "yyyy-MM-dd");
    const paymentTerms = parseInt(data.paymentTerms.split(" ")[1]);
    const paymentDue = format(
      addDays(new Date(startDate), paymentTerms),
      "yyyy-MM-dd"
    );
    data = {
      ...data,
      items: data.items.map((item: any) => ({
        ...item,
        quantity: parseInt(item.quantity),
        price: parseFloat(item.price),
      })),
      createdAt: invoiceDate,
      paymentDue: paymentDue,
      paymentTerms: paymentTerms,
      status: status,
      total: total,
    };
    console.log(data);
  };

  console.log(fields);

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
                {...register("senderAddress.street")}
                id={bfStreet}
                type="text"
              />
            </div>
            <div className="city">
              <label htmlFor={bfCity}>City</label>
              <input
                {...register("senderAddress.city")}
                id={bfCity}
                type="text"
              />
            </div>
            <div className="post-code">
              <label htmlFor={bfPostcode}>Post Code</label>
              <input
                {...register("senderAddress.postCode")}
                id={bfPostcode}
                type="text"
              />
            </div>
            <div className="country">
              <label htmlFor={bfCountry}>Country</label>
              <input
                {...register("senderAddress.country")}
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
                {...register("clientName")}
                id={btClientName}
                type="text"
              />
            </div>
            <div className="clientEmail">
              <label htmlFor={btClientEmail}>Client's Email</label>
              <input
                {...register("clientEmail")}
                id={btClientEmail}
                type="text"
              />
            </div>
            <div className="street">
              <label htmlFor={btStreet}>Street Address</label>
              <input
                {...register("clientAddress.street")}
                id={btStreet}
                type="text"
              />
            </div>
            <div className="city">
              <label htmlFor={btCity}>City</label>
              <input
                {...register("clientAddress.city")}
                id={btCity}
                type="text"
              />
            </div>
            <div className="post-code">
              <label htmlFor={btPostcode}>Post Code</label>
              <input
                {...register("clientAddress.postCode")}
                id={btPostcode}
                type="text"
              />
            </div>
            <div className="country">
              <label htmlFor={btCountry}>Country</label>
              <input
                {...register("clientAddress.country")}
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
              <select id={bdPaymentTerms} {...register("paymentTerms")}>
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
                placeholder="e.g Graphic Design Service"
                type="text"
              />
            </div>
          </div>
          <div className="bill-items">
            <label htmlFor="items">ItemList</label>
            {fields.map((field, index) => (
              <div className="item" key={field.id}>
                <div className="item-name">
                  <label htmlFor={ilItemName}>Item Name</label>
                  <input
                    {...register(`items.${index}.name` as const)}
                    id={ilItemName}
                    type="text"
                  />
                </div>
                <div className="item-quantity">
                  <label htmlFor={ilItemQuantity}>Qty</label>
                  <input
                    {...register(`items.${index}.quantity` as const)}
                    id={ilItemQuantity}
                    type="text"
                  />
                </div>
                <div className="item-price">
                  <label htmlFor={ilItemPrice}>Price</label>
                  <input
                    {...register(`items.${index}.price` as const)}
                    id={ilItemPrice}
                    type="text"
                  />
                </div>
                <div className="item-total">
                  <label htmlFor={ilItemTotal}>Total</label>
                  <TotalPerItem
                    register={register}
                    control={control}
                    index={index}
                  />
                </div>
                <IoMdTrash
                  className="item-remove"
                  onClick={() => remove(index)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                append({
                  name: "",
                  total: 0,
                });
              }}
            >
              + Add New Item
            </button>
          </div>
        </div>
        <Total control={control} setTotal={setTotal} />

        <div className="bill-controller">
          <button className="discard" onClick={handleCloseForm}>
            Discard
          </button>
          <div className="right-side">
            <button
              onClick={() => setStatus("draft")}
              type="submit"
              className="draft"
            >
              Save as Draft
            </button>
            <button
              onClick={() => setStatus("pending")}
              className="save"
              type="submit"
            >
              Save & Send
            </button>
          </div>
        </div>
      </FormStyled>
    </AbsoluteFormContainer>
  );
}

export default Form;
