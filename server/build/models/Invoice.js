"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const mongoose_1 = require("mongoose");
// Declare schema for invoice
const invoiceSchema = new mongoose_1.Schema({
    id: String,
    createdAt: {
        type: Date,
        required: true,
    },
    paymentDue: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    paymentTerms: {
        type: Number,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    clientEmail: String,
    status: String,
    clientAddress: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        postCode: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    senderAddress: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        postCode: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    total: {
        type: Number,
        required: true,
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            total: {
                type: Number,
                required: true,
            },
        },
    ],
});
// Query helper function by Id
invoiceSchema.query.byId = function (id) {
    return this.find({ id: `${id}` });
};
//Query helper function by status
invoiceSchema.query.byStatus = function (status) {
    return this.where({ status: `${status}` });
};
// Export schema
const Invoice = (0, mongoose_1.model)("invoices", invoiceSchema);
exports.Invoice = Invoice;
