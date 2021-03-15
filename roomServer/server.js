
const formatMessage = require("./utils/messages");
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require("./utils/users");

let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server, {
    cors: {
        origin: "*",
      },
      allowEIO3: true
  });

const botName = "ChatCord Bot";

//Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatCord!")); //un client

    //Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      ); //tutti i client eccetto quello che si è connesso    //io.emit() Tutti i client in generale

    // Send users and room info
    io.to(user.room).emit('roomUsers',{
        room:user.room,
        users: getRoomUsers(user.room)
    })
  });

  //Listen for chatMessage
  socket.on("chatMessage", (msg) => {
      const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  //Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if(user){
        io
        .to(user.room)
        .emit("message", formatMessage(botName, `${user.username} has left the chat`));


        // Send users and room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users: getRoomUsers(user.room)
        })
    }
   
  });
});

const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
