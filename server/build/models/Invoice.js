"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const mongoose_1 = require("mongoose");
// Declare schema for invoice
const invoiceSchema = new mongoose_1.Schema({
    id: String,
    createdAt: {
        type: Date,
    },
    paymentDue: {
        type: String,
    },
    description: {
        type: String,
    },
    paymentTerms: {
        type: Number,
    },
    clientName: {
        type: String,
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
    total: {
        type: Number,
    },
    items: [
        {
            name: {
                type: String,
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
            total: {
                type: Number,
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
