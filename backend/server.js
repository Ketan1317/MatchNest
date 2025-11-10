const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const { Server } = require('socket.io');
const http = require('http');

const app = express();
const Socketmap = {}; // username -> socket.id

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New Connection:", socket.id);

  // Save username when sent from frontend
  socket.on("new-user", (username) => {
    if (!username) return;

    socket.username = username;
    Socketmap[username] = socket.id;

    console.log(`✅ User added: ${username} (${socket.id})`);
  });

  // Join room
  socket.on("join-room", (roomId) => {
    if (!roomId || !socket.username) return;

    socket.join(roomId);
    socket.roomId = roomId;

    console.log(`✅ ${socket.username} joined room ${roomId}`);

    // Notify others
    socket.to(roomId).emit("user-joined", {
      username: socket.username,
      message: `${socket.username} joined the room`,
    });

    // Send updated users list to frontend immediately
    sendUsersInRoom(roomId);
  });

  // Return users in room
  socket.on("get-users-in-room", () => {
    if (!socket.roomId) return;
    sendUsersInRoom(socket.roomId);
  });

  // Messaging
  socket.on("send-message", (data) => {
    if (!data || !data.text || !socket.roomId) return;

    io.to(socket.roomId).emit("receive-message", {
      username: socket.username,
      text: data.text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.username} (${socket.id})`);

    if (socket.roomId && socket.username) {
      socket.to(socket.roomId).emit("user-left", {
        username: socket.username,
        message: `${socket.username} left the room`,
      });

      // update users list after leaving
      sendUsersInRoom(socket.roomId);
    }

    // cleanup socketmap
    Object.keys(Socketmap).forEach((name) => {
      if (Socketmap[name] === socket.id) delete Socketmap[name];
    });
  });

  function sendUsersInRoom(roomId) {
    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    const usernames = clients
      .map((id) => io.sockets.sockets.get(id)?.username)
      .filter(Boolean);

    // Send updated user list to all users in the room
    io.to(roomId).emit("users-in-room", usernames);
  }
});

httpServer.listen(process.env.PORT || 3001, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3001}`);
});
