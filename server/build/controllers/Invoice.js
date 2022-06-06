"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvoiceByStatus = exports.updateInvoice = exports.addInvoice = exports.deleteInvoice = exports.getInvoice = exports.getAllInvoices = void 0;
const Invoice_1 = require("../models/Invoice");
// import {IInvoiceResponse} from "../middleware/getInvoiceById"
// Function to get all invoices
const getAllInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield Invoice_1.Invoice.find();
        if (invoices != null) {
            res.status(200).send(invoices);
        }
        else {
            res.status(404).send("There are no invoices at the moment");
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getAllInvoices = getAllInvoices;
// Function to get Invoice by status
const getInvoiceByStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.params;
        let invoices;
        // If the status is not paid & pending & draft => get all
        if (status !== "paid" && status !== "pending" && status !== "draft") {
            invoices = yield Invoice_1.Invoice.find();
        }
        else {
            invoices = yield Invoice_1.Invoice.find().byStatus(status);
        }
        if (invoices != null) {
            res.status(200).send(invoices);
        }
        else {
            res.status(404).send("There are no current invoices for this option");
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getInvoiceByStatus = getInvoiceByStatus;
// Function to get one invoice
const getInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(res.invoice);
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.getInvoice = getInvoice;
// Function to delete invoice by id
const deleteInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = res.invoice._id;
        yield Invoice_1.Invoice.deleteOne({ _id: id });
        res.status(204).send("Successfully deleted");
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.deleteInvoice = deleteInvoice;
// Function update invoice
const updateInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield Invoice_1.Invoice.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).send(invoice);
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.updateInvoice = updateInvoice;
//Function add invoice
const addInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newInvoice = new Invoice_1.Invoice({
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
        }
        else {
            yield newInvoice.save();
            res.status(200).send(newInvoice);
        }
    }
    catch (error) {
        res.status(500).send("Internal server");
    }
});
exports.addInvoice = addInvoice;
