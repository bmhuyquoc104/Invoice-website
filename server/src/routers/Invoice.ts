import express from "express";
import { getAllInvoices } from "../controllers/Invoice";
let router = express.Router();
router.route("/invoice").get(getAllInvoices);

export default router;