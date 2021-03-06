"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Invoice_1 = require("../controllers/Invoice");
const getInvoiceById_1 = require("../middleware/getInvoiceById");
let router = express_1.default.Router();
router.route("/").get(Invoice_1.getAllInvoices).post(Invoice_1.addInvoice);
router.route("/status").get(Invoice_1.getAllInvoices);
router.route("/status/:status").get(Invoice_1.getInvoiceByStatus);
router
    .route("/:id")
    .get(getInvoiceById_1.getInvoiceByID, Invoice_1.getInvoice)
    .delete(getInvoiceById_1.getInvoiceByID, Invoice_1.deleteInvoice)
    .put(getInvoiceById_1.getInvoiceByID, Invoice_1.updateInvoice);
router
    .route("/status/:id")
    .patch(getInvoiceById_1.getInvoiceByID, Invoice_1.updateStatusField);
exports.default = router;
