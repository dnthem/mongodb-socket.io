import express from "express";
import bodyParser from "body-parser";
import * as db from "./db/index.js";
import SocketInit from "./socket.js";
import cors from "cors";
const app = express();
const port = 3000;

await db.connect();
SocketInit();

app.use(bodyParser.json());
app.use(cors({
  origin: "*"
}));

app.get("/items/", async (req, res) => {
  const items = await db.Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  console.log('Post request received');
  const item = new db.Item(req.body);
  await item.save();
  
  res.json(item);
});

app.delete("/items/:id", async (req, res) => {
  console.log('Delete request received');
  const id = req.params.id;
  await db.Item.findByIdAndDelete(id);
  res.json({id});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
