import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    user: {
      type: String,
    },
    category: {
      type: Array,
    },
  },
  { timestamps: true }
);


export const Post = mongoose.model("Post", postSchema);
