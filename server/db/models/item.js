import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Item = mongoose.model("Item", itemSchema);

export default Item;