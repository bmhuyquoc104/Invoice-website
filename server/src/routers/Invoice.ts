import express from "express";
import {
  getAllInvoices,
  getInvoice,
  deleteInvoice,
  addInvoice,
} from "../controllers/Invoice";
import { getInvoiceByID } from "../middleware/getInvoiceById";
let router = express.Router();
router.route("/").get(getAllInvoices).post(addInvoice);
router
  .route("/:id")
  .get(getInvoiceByID, getInvoice)
  .delete(getInvoiceByID, deleteInvoice);
export default router;
