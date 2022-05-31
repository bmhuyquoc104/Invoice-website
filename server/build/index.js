"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Invoice_1 = __importDefault(require("./routers/Invoice"));
// Declare app and variables
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";
const MONGO_URI = process.env.MONGO_URI;
//Connect to mongodb
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
}, () => {
    console.log("connected to database");
});
// Use middleware functions for configure
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Set home page
app.get("/", (req, res) => {
    res.status(200).send("This is backend");
});
//Set invoice route
app.use("/invoice", Invoice_1.default);
// Running the server
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://${HOSTNAME}:${PORT}`);
});
