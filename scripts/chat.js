const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.render(__dirname + '/chat.html');
});
io.on('connection', (socket) =>{
    console.log('a user connected!');
     socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3000, () =>{
    console.log('listening on *:3000');
});