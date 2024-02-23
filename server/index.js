import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/Error.js";
import userRouter from "./Routes/User.js";

/* setting up server */
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});


// set up your routes here
app.use("/api/user", userRouter);