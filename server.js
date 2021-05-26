// const http = require("http");
// const express = require("express");
// const cors = require("cors");
// const socketIo = require("socket.io");
// const { addUser, removeUser, getUsersInRoom } = require("./users");
// const { addMessage, getMessagesInRoom } = require("./messages");

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     // origin: "http://localhost:3000",
//     // origin: "https://bandstandv1.herokuapp.com/chatroom",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets
//   app.use(express.static('client/build'));

//   // Express serve up index.html file if it doesn't recognize route
//   const path = require('path');
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 4000;
// const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
// const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
// const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
// const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
// const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";

// io.on("connection", (socket) => {
//   console.log(`${socket.id} connected`);

//   // Join a conversation
//   const { roomId, name, picture } = socket.handshake.query;
//   socket.join(roomId);

//   const user = addUser(socket.id, roomId, name, picture);
//   io.in(roomId).emit(USER_JOIN_CHAT_EVENT, user);

//   // Listen for new messages
//   socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//     const message = addMessage(roomId, data);
//     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, message);
//   });

//   // Listen typing events
//   socket.on(START_TYPING_MESSAGE_EVENT, (data) => {
//     io.in(roomId).emit(START_TYPING_MESSAGE_EVENT, data);
//   });
//   socket.on(STOP_TYPING_MESSAGE_EVENT, (data) => {
//     io.in(roomId).emit(STOP_TYPING_MESSAGE_EVENT, data);
//   });

//   // Leave the room if the user closes the socket
//   socket.on("disconnect", () => {
//     removeUser(socket.id);
//     io.in(roomId).emit(USER_LEAVE_CHAT_EVENT, user);
//     socket.leave(roomId);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

// app.get("/rooms/:roomId/users", (req, res) => {
//   const users = getUsersInRoom(req.params.roomId);
//   return res.json({ users });
// });

// app.get("/rooms/:roomId/messages", (req, res) => {
//   const messages = getMessagesInRoom(req.params.roomId);
//   return res.json({ messages });
// });

// establish dependencies
const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIo = require("socket.io");
const { addUser, removeUser, getUsersInRoom } = require("./users");
const { addMessage, getMessagesInRoom } = require("./messages");
const path = require("path");
const connectDB = require("./config/db")

// set app to use express and cors
const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


app.use(express.json({ extended: false }));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

app.use(cors());


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// create express server
const server = http.createServer(app);


// set up websocket and cors permission on the server
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// back-end port number
const PORT = process.env.PORT || 4000;

// establish socket.io controls
const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`);

  // join a conversation
  const { roomId, name, picture } = socket.handshake.query;
  socket.join(roomId);

  const user = addUser(socket.id, roomId, name, picture);
  io.in(roomId).emit(USER_JOIN_CHAT_EVENT, user);

  // listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    const message = addMessage(roomId, data);
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, message);
  });

  // listen typing events
  socket.on(START_TYPING_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(START_TYPING_MESSAGE_EVENT, data);
  });
  socket.on(STOP_TYPING_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(STOP_TYPING_MESSAGE_EVENT, data);
  });

  // leave the room if the user closes the socket
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.in(roomId).emit(USER_LEAVE_CHAT_EVENT, user);
    socket.leave(roomId);
  });
});

// start server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/rooms/:roomId/users", (req, res) => {
  const users = getUsersInRoom(req.params.roomId);
  return res.json({ users });
});

app.get("/rooms/:roomId/messages", (req, res) => {
  const messages = getMessagesInRoom(req.params.roomId);
  return res.json({ messages });
});

module.exports = app;