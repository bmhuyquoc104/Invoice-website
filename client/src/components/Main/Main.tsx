import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useGetInvoicesByStatus } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import MainStyled from "./Main.styled";
import { Invoice as InvoiceType } from "../../api/invoice";
import Invoice from "./Invoice/Invoice";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination"

function Main() {
  // Use to router to another page
  const navigate = useNavigate();

  // Refs to get the innerText of filter option
  const paidRef = useRef<any>(null);
  const draftRef = useRef<any>(null);
  const pendingRef = useRef<any>(null);
  const dropDownRef = useRef<any>(null);
  // State to manage which filter option is selected
  const [isSelected, setIsSelected] = useState<string[]>(["all"]);

  // State to manage the open or close of model or dropdown
  const [isToggleForm, setIsToggleForm] = useState(false);
  const [isToggleDropDown, setIsToggleDropDown] = useState(false);

  // State to manage the page number
  const [page, setPage] = useState(1);

  // Function to handle close when user click out side the model
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
  const {
    data: invoicesByStatus,
    isLoading: isStatusLoading,
    error: statusError,
    isError: isStatusError,
  } = useGetInvoicesByStatus(isSelected[0]);

  // Display when data is loading
  if (isStatusLoading) {
    return <div style = {{textAlign: "center"}}>Loading...</div>;
  }
  // Display when data is error
  if (isStatusError) {
    return <h1>{`Error: ${statusError}`}</h1>;
  }

  // Handle selected option
  const handleSelected = (value: string) => {
    let temp: string[] = [];
    if (isSelected.length === 0) {
      temp.push(value.toLowerCase());
      setIsSelected(temp);
    } else if (
      isSelected.length > 0 &&
      isSelected.includes(value.toLowerCase())
    ) {
      setIsSelected(["all"]);
    } else {
      temp.slice(0, 1);
      temp.push(value.toLowerCase());
      setIsSelected(temp);
    }
  };

  // Get info for the page to display
  const invoicePerPage = 7;
  const totalPages = Math.ceil(invoicesByStatus?.data.length / invoicePerPage);
  const lastIndexOfPage = page * invoicePerPage;
  const firstIndexOfPage = lastIndexOfPage - invoicePerPage;

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
          <h2>{`There are ${
            invoicesByStatus?.data.slice(firstIndexOfPage, lastIndexOfPage)
              .length
          } total invoices`}</h2>
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
                  className={isSelected[0] === "paid" ? "paid-selected" : ""}
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
                    isSelected[0] === "pending" ? "pending-selected" : ""
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
                  className={isSelected[0] === "draft" ? "draft-selected" : ""}
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
        {invoicesByStatus?.data
          .slice(firstIndexOfPage, lastIndexOfPage)
          .map((invoice: InvoiceType) => (
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
            ids={invoicesByStatus?.data.map(
              (invoice: InvoiceType) => invoice.id
            )}
            formType="add"
            show={isToggleForm}
            handleCloseForm={(e) => {
              e.preventDefault();
              setIsToggleForm(false);
            }}
          />
        )}
      </AnimatePresence>
      <Pagination totalPages={totalPages} currentPage = {page} setPage = {setPage}/>
    </MainStyled>
  );
}

export default Main;
