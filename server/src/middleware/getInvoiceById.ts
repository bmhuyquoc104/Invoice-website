import { Invoice } from "../models/Invoice";
import { Request, Response, NextFunction } from "express";
// import * as express from "express";

// // Extends type response to provide the invoice type
// interface IInvoiceResponse extends express.Response {
//   invoice: any;
// }
// Middleware to get only invoice by ID
const getInvoiceByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let invoice;
  try {
    console.log(invoice);
    invoice = await Invoice.findById(req.params.id);
    if (invoice == null) {
      return res.status(404).send("Can not find this invoice");
    }
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
  res.invoice = invoice;
  next();
};

export { getInvoiceByID };
