import mongoose from "mongoose";
import Item from "./models/item.js";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

export {
  Item,
  connect
};