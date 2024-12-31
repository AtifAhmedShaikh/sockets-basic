const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176"],
    methods: ["GET", "POST"],
  },
});

app.use(express.json());

let messages = [];

io.on("connection", (socket) => {
  socket.emit("message", messages);
    // it will fire when FE emit message evnt
  socket.on("message", (data) => {
    const newMessage = { sender: data.username || "Some One", text: data.text };
    messages.push(newMessage);
    // fire message event that in FE side we have listened it at socket.on
    io.emit("message", newMessage);
  });

  socket.on("disconnect", () => {});
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
