// index.mjs
import { players } from "./constants.mjs";

const p1 = document.querySelector("#p1");
const button1 = document.querySelector("#button1");

let attack = {
    id: null,
    name: null,
    rating: null
}

let defense = {
    id: null,
    name: null,
    rating: null
}

let goalie = {
    id: null,
    name: null,
    rating: null
}

attack.id = prompt(`Input the id of the attacker`);
matchPlayer(attack);
defense.id = prompt(`Input the id of the defender`);
matchPlayer(defense);
goalie.id = prompt(`Input the id of the goalie`);
matchPlayer(goalie);

let ids = [attack.id, defense.id, goalie.id];
let ratings = [];

button1.innerText = "Start Game";
button1.onclick = startGame;

function startGame() {
    console.log(`Starting game...`);
    console.log(ratings);
    randomize();
    if (attackRating > defenseRating && attackRating > goalieRating) {
        p1.innerText = `Goal! ${attackName}'s shot hit the back of the net!`;
    }
    else if (attackRating > defenseRating && attackRating < goalieRating) {
        p1.innerText = `Saved! ${attackName} was able to get a shot on goal, but it was saved by ${goalieName}!`;
    }
    else if (attackRating < defenseRating) {
        p1.innerText = `Shut Down! {$defenseName} locked up ${attackName} and the shot clock expired!`;
    }
    updateGame();
}

function randomize() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i] = Math.floor(ratings[i] * Math.random() * (1.1 - 0.7) + 0.7);
    }
}

function updateGame() {
    matchPlayer(attack);
    matchPlayer(defense);
    matchPlayer(goalie);
}

function matchPlayer(player) {
    for (let i = 0; i < players.length; i++) {
        if (player.id == players[i].id) {
            player.name = players[i].name;
            player.rating = players[i].rating;
            ratings.append(players[i].rating);
        }
    }
}
