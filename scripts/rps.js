const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/rps.html');
});
io.on('connection', (socket) =>{
    console.log('a user connected!');
     socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

server.listen(3002, () =>{
    console.log('listening on *:3002');
});

function game(choice1, choice2){
    if(choice1==choice2){
        return 0;
    }else if((choice1+1) % 3 == choice2 % 3){
        return 1;
    }else{
        return 2;
    }
}