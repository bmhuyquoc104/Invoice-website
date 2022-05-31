import { Invoice } from "../models/Invoice";
import { Response, Request } from "express";
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


export {getAllInvoices}