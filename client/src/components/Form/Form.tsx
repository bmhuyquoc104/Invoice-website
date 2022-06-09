import { IoMdTrash } from "react-icons/io";
import { format, addDays } from "date-fns";
import DatePicker from "react-datepicker";
import { useQueryClient } from "react-query";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useId, useState, useRef, useEffect, useContext } from "react";
import FormStyled from "./Form.styled";
import { RefContext } from "../../hooks/useRefContext";
import { AbsoluteFormContainer } from "../AbsoluteFlexModel/AbsoluteFlexModel";
import Total from "./Total/Total";
import TotalPerItem from "./TotalPerItem";
import { useAddInvoice, useEditInvoice } from "../../hooks/useInvoice";
import { generateUniqueId } from "../../helper/GenerateId";
import { Invoice } from "../../api/invoice";

// Props
type FormProps = {
  handleCloseForm: (event: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
  ids?: string[];
  id?: string;
  formType: string;
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

function Form({ handleCloseForm, ids, formType, id }: FormProps) {
  // State to mange the total 
  const [total, setTotal] = useState(0);
  //  State to manage the date
  const [startDate, setStartDate] = useState(new Date());
  // Get the header ref from header component
  const { headerRef } = useContext(RefContext);
  //Ref the whole contain in side the form
  const containRef = useRef<any>(null);
  // Declare query client for using in react query hooks
  const queryClient = useQueryClient();
  const editInvoice: any = queryClient.getQueryData(["invoice", id]);
  // Get the edit from the custom edit hook
  const { mutate: edit } = useEditInvoice();

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
          street: yup.string().required("Required"),
          city: yup.string().required("Required"),
          country: yup.string().required("Required"),
          postCode: yup.string().required("Required"),
        })
        .required(),
      clientAddress: yup
        .object()
        .shape({
          street: yup.string().required("Required"),
          city: yup.string().required("Required"),
          country: yup.string().required("Required"),
          postCode: yup.string().required("Required"),
        })
        .required(),
      clientName: yup.string().required("Required"),
      clientEmail: yup
        .string()
        .email("It not a valid email")
        .required("Required"),
      paymentTerms: yup.string().required("Please select paymentTerms"),
      items: yup
        .array()
        .of(
          yup.object().shape({
            name: yup.string().required("Required"),
            price: yup
              .number()
              .typeError("Number only")
              .positive("Positive only"),

            total: yup.number(),
            quantity: yup
              .number()
              .typeError("Number only")
              .positive("Positive only"),
          })
        )
        .compact(function (v) {
          return v == null;
        }),
      description: yup.string().required("Required"),
    })
    .required();

  // Declare form default values
  const formDefaultValue: FormValue = !id
    ? {
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
      }
    : {
        paymentTerms:
          editInvoice?.data?.paymentTerms > 1
            ? `Net ${editInvoice?.data?.paymentTerms} days`
            : `Net ${editInvoice?.data?.paymentTerms} day`,

        description: editInvoice?.data?.description,
        id: editInvoice?.data?.id,
        clientEmail: editInvoice?.data?.clientEmail,
        total: editInvoice?.data?.total,
        clientName: editInvoice?.data?.clientName,
        clientAddress: {
          street: editInvoice?.data?.clientAddress.street,
          city: editInvoice?.data?.clientAddress.city,
          postCode: editInvoice?.data?.clientAddress.postCode,
          country: editInvoice?.data?.clientAddress.country,
        },
        senderAddress: {
          street: editInvoice?.data?.senderAddress.street,
          city: editInvoice?.data?.senderAddress.city,
          postCode: editInvoice?.data?.senderAddress.postCode,
          country: editInvoice?.data?.senderAddress.country,
        },
        items: editInvoice?.data?.items?.map((item: any) => ({
          name: item?.name,
          quantity: item?.quantity,
          total: item?.total,
          price: item?.price,
        })),
      };

  // Declare useMutation hook
  const { mutate } = useAddInvoice();
  //Declare react hook From with its props
  const {
    register,
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { touchedFields, isValid, errors },
    formState,
  } = useForm<FormValue>({
    defaultValues: formDefaultValue,
    resolver: yupResolver(schema),
    mode: "onTouched",
    shouldFocusError: true,
  });
  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "items", // unique name for your Field Array
  });

  // Function when click save to submit the form
  const onSubmit = (data: any, e: any) => {
    const invoiceDate = format(startDate, "yyyy-MM-dd");
    console.log(invoiceDate);
    const paymentTerms = parseInt(data.paymentTerms.split(" ")[1]);
    const paymentDue = format(
      addDays(new Date(startDate), paymentTerms),
      "yyyy-MM-dd"
    );
    // Generate unique id
    let id = generateUniqueId(ids);
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
      status: "pending",
      total: total,
      id: id,
    };
    handleCloseForm(e);
    mutate(data);
    reset();
  };

  //  Function to save the invoice to draft
  const saveAsDraft = (e: any) => {
    let id = formType === "add" ? generateUniqueId(ids) : editInvoice?.data?.id;
    console.log(id);
    let currentValues: any = getValues();
    const createdAt = format(startDate, "yyyy-MM-dd");
    const paymentTerms = parseInt(currentValues.paymentTerms.split(" ")[1]);
    const paymentDue = format(
      addDays(new Date(startDate), paymentTerms),
      "yyyy-MM-dd"
    );
    currentValues =
      formType === "add"
        ? {
            ...currentValues,
            status: "draft",
            total: total,
            paymentTerms: paymentTerms,
            paymentDue: paymentDue,
            createdAt: createdAt,
            items: currentValues.items.map((item: any) => ({
              ...item,
              quantity: parseInt(item.quantity),
              price: parseFloat(item.price),
            })),
            id: id,
          }
        : {
            ...currentValues,
            items: currentValues.items.map((item: any) => ({
              ...item,
              quantity: parseInt(item.quantity),
              price: parseFloat(item.price),
            })),
            createdAt: createdAt,
            paymentDue: paymentDue,
            paymentTerms: paymentTerms,
            status: editInvoice?.data?.status,
            total: total,
            _id: editInvoice?.data?._id,
          };
    const updateId = editInvoice?.data?._id;

    formType === "add" && reset();
    formType === "add"
      ? mutate(currentValues)
      : edit({ updateId, ...currentValues });

    handleCloseForm(e);
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
        {formType === "add" ? (
          <h2>Create Invoice</h2>
        ) : (
          <h2>
            Edit <span>#</span>
            {editInvoice?.data?.id}
          </h2>
        )}
        <div className="bill-body">
          <div className="bill-form">
            <h3>Bill Form</h3>
            <div
              className={`street ${
                touchedFields.senderAddress?.street &&
                (errors.senderAddress?.street ? "error" : "success")
              } `}
            >
              <label htmlFor={bfStreet}>Street Address</label>
              <input
                {...register("senderAddress.street")}
                id={bfStreet}
                type="text"
              />
              <p className="message">{errors.senderAddress?.street?.message}</p>
            </div>
            <div
              className={`city ${
                touchedFields.senderAddress?.city &&
                (errors.senderAddress?.city ? "error" : "success")
              }`}
            >
              <label htmlFor={bfCity}>City</label>
              <input
                {...register("senderAddress.city")}
                id={bfCity}
                type="text"
              />
              <p className="message">{errors.senderAddress?.city?.message}</p>
            </div>
            <div
              className={`post-code ${
                touchedFields.senderAddress?.postCode &&
                (errors.senderAddress?.postCode ? "error" : "success")
              }`}
            >
              <label htmlFor={bfPostcode}>Post Code</label>
              <input
                {...register("senderAddress.postCode")}
                id={bfPostcode}
                type="text"
              />
              <p className="message">
                {errors.senderAddress?.postCode?.message}
              </p>
            </div>
            <div
              className={`country  ${
                touchedFields.senderAddress?.country &&
                (errors.senderAddress?.country ? "error" : "success")
              }`}
            >
              <label htmlFor={bfCountry}>Country</label>
              <input
                {...register("senderAddress.country")}
                id={bfCountry}
                type="text"
              />
              <p className="message">
                {errors.senderAddress?.country?.message}
              </p>
            </div>
          </div>
          {/* Bill To */}
          <div className="bill-to">
            <h3>Bill To</h3>
            <div
              className={`clientName ${
                touchedFields.clientName &&
                (errors.clientName ? "error" : "success")
              }`}
            >
              <label htmlFor={btClientName}>Client's Name</label>
              <input
                {...register("clientName")}
                id={btClientName}
                type="text"
              />
              <p className="message">{errors?.clientName?.message}</p>
            </div>

            <div
              className={`clientEmail ${
                touchedFields.clientEmail &&
                (errors.clientEmail ? "error" : "success")
              }`}
            >
              <label htmlFor={btClientEmail}>Client's Email</label>
              <input
                {...register("clientEmail")}
                id={btClientEmail}
                placeholder="e.g. email@xample.com"
                type="text"
              />

              <p className="message">{errors?.clientEmail?.message}</p>
            </div>

            <div
              className={`street ${
                touchedFields.clientAddress?.street &&
                (errors.clientAddress?.street ? "error" : "success")
              }`}
            >
              <label htmlFor={btStreet}>Street Address</label>
              <input
                {...register("clientAddress.street")}
                id={btStreet}
                type="text"
              />
              <p className="message">
                {errors?.clientAddress?.street?.message}
              </p>
            </div>
            <div
              className={`city ${
                touchedFields.clientAddress?.city &&
                (errors.clientAddress?.city ? "error" : "success")
              }`}
            >
              <label htmlFor={btCity}>City</label>
              <input
                {...register("clientAddress.city")}
                id={btCity}
                type="text"
              />
              <p className="message">{errors?.clientAddress?.city?.message}</p>
            </div>
            <div
              className={`post-code ${
                touchedFields?.clientAddress?.postCode &&
                (errors?.clientAddress?.postCode ? "error" : "success")
              }`}
            >
              <label htmlFor={btPostcode}>Post Code</label>
              <input
                {...register("clientAddress.postCode")}
                id={btPostcode}
                type="text"
              />
              <p className="message">
                {errors?.clientAddress?.postCode?.message}
              </p>
            </div>
            <div
              className={`country ${
                touchedFields?.clientAddress?.country &&
                (errors?.clientAddress?.country ? "error" : "success")
              }`}
            >
              <label htmlFor={btCountry}>Country</label>
              <input
                {...register("clientAddress.country")}
                id={btCountry}
                type="text"
              />
              <p className="message">
                {errors?.clientAddress?.country?.message}
              </p>
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
            <div
              className={`payment-terms ${
                touchedFields?.paymentTerms &&
                (errors?.paymentTerms ? "error" : "success")
              }`}
            >
              <label htmlFor={btCountry}>Payment Terms</label>
              <select id={bdPaymentTerms} {...register("paymentTerms")}>
                <option value="Net 1 day">Net 1 day</option>
                <option value="Net 7 days">Net 7 days</option>
                <option value="Net 14 days">Net 14 days</option>
                <option value="Net 30 days">Net 30 days</option>
              </select>
              <p className="message">{errors?.paymentTerms?.message}</p>
            </div>
          </div>
          <div className="bill-description">
            <div
              className={`description ${
                touchedFields?.description &&
                (errors?.description ? "error" : "success")
              }`}
            >
              <label htmlFor={bdDescription}>Description</label>
              <input
                id={bdDescription}
                {...register("description")}
                placeholder="e.g Graphic Design Service"
                type="text"
              />
              <p className="message">{errors?.description?.message}</p>
            </div>
          </div>
          <div className="bill-items">
            <label htmlFor="items">ItemList</label>
            {fields.map((field, index) => (
              <div className="item" key={field.id}>
                <div
                  className={`item-name ${
                    touchedFields.items?.[index]?.name &&
                    (errors?.items?.[index]?.name ? "error" : "success")
                  }`}
                >
                  <label htmlFor={ilItemName}>Item Name</label>
                  <input
                    {...register(`items.${index}.name` as const)}
                    id={ilItemName}
                    type="text"
                  />
                  <p className="message">
                    {errors?.items?.[index]?.name?.message}
                  </p>
                </div>
                <div
                  className={`item-quantity ${
                    touchedFields.items?.[index]?.quantity &&
                    (errors?.items?.[index]?.quantity ? "error" : "success")
                  }`}
                >
                  <label htmlFor={ilItemQuantity}>Qty</label>
                  <input
                    {...register(`items.${index}.quantity` as const)}
                    id={ilItemQuantity}
                    type="text"
                  />
                  <p className="message">
                    {errors?.items?.[index]?.quantity?.message}
                  </p>
                </div>
                <div
                  className={`item-price ${
                    touchedFields.items?.[index]?.price &&
                    (errors?.items?.[index]?.price ? "error" : "success")
                  }`}
                >
                  <label htmlFor={ilItemPrice}>Price</label>
                  <input
                    {...register(`items.${index}.price` as const)}
                    id={ilItemPrice}
                    type="text"
                  />
                  <p className="message">
                    {errors?.items?.[index]?.price?.message}
                  </p>
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
          <div className="bill-total">
            <Total control={control} setTotal={setTotal} />
          </div>
        </div>
        {formType === "add" && (
          <div className="bill-controller">
            <button className="discard" onClick={handleCloseForm}>
              Discard
            </button>
            <div className="right-side">
              <button onClick={saveAsDraft} type="button" className="draft">
                Save as Draft
              </button>
              <button className="save" type="submit" disabled={!isValid}>
                Save & Send
              </button>
              <p className="button-message">Please fill all the fields</p>
            </div>
          </div>
        )}
        {formType === "edit" && (
          <div className="bill-controller edit">
            <div className="right-side">
              <button onClick={handleCloseForm} type="button" className="draft">
                Cancel
              </button>
              <button className="save" type="button" onClick={saveAsDraft}>
                Save changes
              </button>
              <p className="button-message">Please fill all the fields</p>
            </div>
          </div>
        )}
      </FormStyled>
    </AbsoluteFormContainer>
  );
}

export default Form;
