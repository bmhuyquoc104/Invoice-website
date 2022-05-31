import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";

// Declare app and variables
const app: Express = express();
const PORT =  process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || "localhost";
const MONGO_URI = process.env.MONGO_URI !;

//Connect to mongodb
mongoose.connect(
  MONGO_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions,
  () => {
    console.log("connected to database");
  }
);

// Set home page
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is backend");
});

// Use middleware functions for configure
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Running the server
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${HOSTNAME}:${PORT}`);
});
