import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
dotenv.config();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));

