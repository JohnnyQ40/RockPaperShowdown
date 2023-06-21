const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let player1 =0;
let player2 =1;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/rps.html');
});
io.on('connection', (socket) =>{
    console.log('a user connected!');
     socket.on('selection', (selection) => {
        player1 = selection;
    console.log("player 1 has selected: "+selection);
    if(player1){
        player2 = selection;
        console.log("player 2 has selected: "+selection);
    }
  });
  if(player1 && player2){
    game(player1, player2);
  }
});

server.listen(3002, () =>{
    console.log('listening on *:3002');
});

function game(choice1, choice2){
    if(choice1==choice2){
        console.log('Tie');
        return 0;
    }else if((choice1+1) % 3 == choice2 % 3){
        console.log('Player 1 wins');
        return 1;
    }else{
        console.log('Player 2 wins');
        return 2;
    }
}