import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { errorHandler } from "./Middlewares/serverErrorHandler";
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { DATABASE_URL, PORT } = process.env;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.error(error);
  });


