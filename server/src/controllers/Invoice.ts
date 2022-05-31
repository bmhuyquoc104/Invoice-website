import { Response, Request } from "express";
import { Invoice } from "../models/Invoice";
// import {IInvoiceResponse} from "../middleware/getInvoiceById"

// Function to get all invoices
const getAllInvoices = async (req: Request, res: Response) => {
  try {
    const invoices: any = await Invoice.find();
    if (invoices != null) {
      res.status(200).send(invoices);
    } else {
      res.status(404).send("There are no invoices at the moment");
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

// Function to get one invoice
const getInvoice = async (req: Request, res: Response) => {
  try {
    res.status(200).send(res.invoice);
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

// Function to delete invoice by id
const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const id = res.invoice[0].id;
    await Invoice.deleteOne({ id: id });
    res.status(204).send("Successfully deleted");
  } catch (error) {
    res.status(500).send("Internal server");
  }
};

//Function add invoice
const addInvoice = async (req: Request, res: Response) => {
  try {
    const newInvoice = new Invoice({
      id: req.body.id,
      createdAt: req.body.createdAt,
      paymentDue: req.body.paymentDue,
      description: req.body.description,
      paymentTerms: req.body.paymentTerms,
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      status: req.body.status,
      senderAddress: req.body.senderAddress,
      clientAddress: req.body.clientAddress,
      items: req.body.items,
      total: req.body.total,
    });
    if (newInvoice == null) {
      res.status(400).send("Please enter new invoice");
    } else {
      await newInvoice.save();
      res.status(200).send(newInvoice);
    }
  } catch (error) {
    res.status(500).send("Internal server");
  }
};
export { getAllInvoices, getInvoice, deleteInvoice, addInvoice };
