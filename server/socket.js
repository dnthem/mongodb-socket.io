import { Server } from "socket.io";
import { Item } from "./db/index.js";

export default function SocketInit () {
  const io = new Server(3001, {
    cors: {
      origin: "*",
    },
  });
  
  io.on("connection", (socket) => {
    console.log("a user connected");
    Item.watch().on("change", (change) => {
      console.log("Change detected", change);
      if (change.operationType === "insert") {
        console.log("Insert detected");
        socket.emit("postItems", change.fullDocument);
      }

      if (change.operationType === "delete") {
        console.log("Delete detected");
        socket.emit("deleteItems", change.documentKey._id);
      }
    });
  });
};