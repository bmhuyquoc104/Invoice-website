import express from "express";
import {
  getAllInvoices,
  getInvoice,
  deleteInvoice,
  updateInvoice,
  addInvoice,
  getInvoiceByStatus,
} from "../controllers/Invoice";
import { getInvoiceByID } from "../middleware/getInvoiceById";
let router = express.Router();
router.route("/").get(getAllInvoices).post(addInvoice);
router.route("/status").get(getAllInvoices);
router.route("/status/:status").get(getInvoiceByStatus);
router
  .route("/:id")
  .get(getInvoiceByID, getInvoice)
  .delete(getInvoiceByID, deleteInvoice)
  .put(getInvoiceByID, updateInvoice);
export default router;
