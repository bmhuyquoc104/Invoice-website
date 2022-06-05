import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useGetAllInvoices } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import MainStyled from "./Main.styled";
import { Invoice as InvoiceType } from "../../api/invoice";
import Invoice from "./Invoice/Invoice";
import Form from "../Form/Form";

function Main() {
  // Use to router to another page
  const navigate = useNavigate();

  // Refs to get the innerText of filter option
  const paidRef = useRef<any>(null);
  const draftRef = useRef<any>(null);
  const pendingRef = useRef<any>(null);
  const dropDownRef = useRef<any>(null);
  // State to manage which filter option is selected
  const [isSelected, setIsSelected] = useState<string[]>([]);

  // Handle selected option
  const handleSelected = (value: string) => {
    let temp: string[] = [];
    if (isSelected.length === 0) {
      temp.push(value);
      setIsSelected(temp);
    } else if (isSelected.length > 0 && isSelected.includes(value)) {
      setIsSelected([]);
    } else {
      temp.slice(0, 1);
      temp.push(value);
      setIsSelected(temp);
    }
  };

  // State to manage the open or close of model or dropdown
  const [isToggleForm, setIsToggleForm] = useState(false);
  const [isToggleDropDown, setIsToggleDropDown] = useState(false);

  useEffect(() => {
    const handleClose = (e: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsToggleDropDown(false);
      }
    };
    document.addEventListener("click", handleClose, true);
    return () => document.removeEventListener("click", handleClose, true);
  }, [setIsToggleDropDown]);

  // Get all the data
  const { data: invoices, isLoading, error, isError } = useGetAllInvoices();

  // Display when data is loading
  if (isLoading) {
    return <div>loading</div>;
  }
  // Display when data is error
  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

  // Parent animation
  const ulVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // Children animation
  const liVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <MainStyled>
      <motion.div
        variants={ulVariant}
        animate="visible"
        initial="hidden"
        className="main-header"
      >
        <div className="header-title">
          <h1>Invoices</h1>
          <h2>{`There are ${invoices?.data.length} total invoices`}</h2>
        </div>
        <div className="header-control">
          {!isToggleDropDown ? (
            <button
              onClick={() => setIsToggleDropDown(!isToggleDropDown)}
              className="filter"
            >
              <p>Filter by status</p>
              <img src={imageResource.ArrowDown} alt="Arrow down" />
            </button>
          ) : (
            <button ref={dropDownRef} className="filter drop-down">
              <div
                onClick={() => setIsToggleDropDown(!isToggleDropDown)}
                className="filter-top"
              >
                <p>Filter by status</p>
                <img
                  className={isToggleDropDown ? "up" : ""}
                  src={imageResource.ArrowDown}
                  alt="Arrow down"
                />
              </div>
              <div className="filter-options">
                <p
                  className={isSelected[0] === "Paid" ? "paid-selected" : ""}
                  ref={paidRef}
                  onClick={() => {
                    handleSelected(paidRef.current.innerText);
                  }}
                >
                  <span>
                    <img src={imageResource.Check} alt="check" />
                  </span>
                  Paid
                </p>
                <p
                  className={
                    isSelected[0] === "Pending" ? "pending-selected" : ""
                  }
                  ref={pendingRef}
                  onClick={() => {
                    handleSelected(pendingRef.current.innerText);
                  }}
                >
                  <span>
                    <img src={imageResource.Check} alt="check" />
                  </span>
                  Pending
                </p>
                <p
                  className={isSelected[0] === "Draft" ? "draft-selected" : ""}
                  ref={draftRef}
                  onClick={() => {
                    handleSelected(draftRef.current.innerText);
                  }}
                >
                  <span>
                    <img src={imageResource.Check} alt="check" />
                  </span>
                  Draft
                </p>
              </div>
            </button>
          )}
          <button onClick={() => setIsToggleForm(true)} className="add">
            <img src={imageResource.Plus} alt="Plus" />
            <p>New invoice</p>
          </button>
        </div>
      </motion.div>
      <motion.div
        className="main-body"
        variants={ulVariant}
        animate="visible"
        initial="hidden"
      >
        {invoices?.data.map((invoice: InvoiceType) => (
          <Invoice
            key={invoice._id}
            id={invoice.id}
            status={invoice.status}
            paymentDue={invoice.paymentDue}
            total={invoice.total}
            clientName={invoice.clientName}
            liVariant={liVariant}
            handleClick={() => navigate(`/${invoice._id}`)}
          ></Invoice>
        ))}
      </motion.div>
      <AnimatePresence>
        {isToggleForm && (
          <Form
            show={isToggleForm}
            handleCloseForm={(e) => {
              e.preventDefault();
              setIsToggleForm(false);
            }}
          />
        )}
      </AnimatePresence>
    </MainStyled>
  );
}

export default Main;
