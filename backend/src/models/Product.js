import mongoose from "mongoose";

export default mongoose.model(
  "Product",
  new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    image: String
  })

);