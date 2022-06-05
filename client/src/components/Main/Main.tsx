import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useGetAllInvoices } from "../../hooks/useInvoice";
import { imageResource } from "../../public/imageResources";
import MainStyled from "./Main.styled";
import { Invoice as InvoiceType } from "../../api/invoice";
import Invoice from "./Invoice/Invoice";
import Form from "../Form/Form";

function Main() {
  const navigate = useNavigate();
  const { data: invoices, isLoading, error, isError } = useGetAllInvoices();
  const [isToggleForm, setIsToggleForm] = useState(false);
  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <h1>{`Error: ${error}`}</h1>;
  }

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
          <button className="filter">
            <p>Filter by status</p>
            <img src={imageResource.ArrowDown} alt="Arrow down" />
          </button>
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
