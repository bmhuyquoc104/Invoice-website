import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import invoice from "./routers/Invoice"

// Declare app and variables
const app: Express = express();
const PORT =  process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";
const MONGO_URI = process.env.MONGO_URI !;

//Connect to mongodb
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
  } as ConnectOptions,
  () => {
    console.log("connected to database");
  }
);



// Use middleware functions for configure
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set home page
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is backend");
});

//Set invoice route
app.use("/invoice",invoice)

// Running the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://${HOSTNAME}:${PORT}`);
});
