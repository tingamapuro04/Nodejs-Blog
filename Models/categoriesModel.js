import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true });

const Category = mongoose.model("Category", catSchema);

export default Category;
