import mongoose from "mongoose";

const Postchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  user: {
    type: String
  },
  category: {
    type: Array
  }
});
