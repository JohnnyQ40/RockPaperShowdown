const { User } = require('../models')

const userData = [
    {
    id: 4 ,
    username: "cowboy2",
    password: "cowboy2pw",
    wins: 20, 
    loses: 20,
    ties: 20, 
    rockPicks: 20,
    paperPicks: 20,
    scissors: 20,
},
{
    id: 5 ,
    username: "dwayneRock",
    password: "rock2pw",
    wins: 5, 
    loses: 20,
    ties: 25, 
    rockPicks: 30,
    paperPicks: 10,
    scissors: 10,
},
{
    id: 6 ,
    username: "citizenSnips",
    password: "snipspw",
    wins: 20, 
    loses: 20,
    ties: 20, 
    rockPicks: 5,
    paperPicks: 5,
    scissors: 50,
},
{
    id: 7 ,
    username: "JohnnyPaper",
    password: "paperpw",
    wins: 20, 
    loses: 30,
    ties: 10, 
    rockPicks: 20,
    paperPicks: 40,
    scissors: 0,
}

];

const seedUsers = () => User.bulkCreate(userData)


module.exports =  seedUsers;
