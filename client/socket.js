import socket from "socket.io-client";
import { addItem, deleteItem } from "./main";

function socketInit() {
  const io = socket("http://localhost:3001");

  io.on("connect", () => {
    console.log("Connected to socket");
  });
  
  io.on("postItems", (item) => {
    console.log("Received item from server", item);
    addItem({id: item._id,  name: item.name, price: item.price});
  });

  io.on("deleteItems", (id) => {
    console.log("Removing item", id);
    deleteItem(id);
  });
} 

export default socketInit;