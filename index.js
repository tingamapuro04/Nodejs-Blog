import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import { errorHandler } from "./Middlewares/serverErrorHandler.js";
import { router } from "./Route/routes.js";
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use('/api/v1/', router);


const { DATABASE_URL, PORT } = process.env;
app.use(errorHandler);
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




