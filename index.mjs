// index.mjs
//import { players } from "./constants.mjs";

const p1 = document.querySelector("#p1");
const button1 = document.querySelector("#button1");

const attackName = prompt(`Input the name of the attacker`);
const attackRating = prompt(`Input the rating of the attacker`);
const defenseName = prompt(`Input the name of the defender`);
const defenseRating = prompt(`Input the rating of the defender`);
const goalieName = prompt(`Input the name of the goalie`);
const goalieRating = prompt(`Input the rating of the goalie`);

p1.innerText = `${attackName}, ${attackRating}, ${defenseName}, ${defenseRating}, ${goalieName}, ${goalieRating}`;
button1.onclick = startGame;

function startGame() {
    if (attackRating > defenseRating) {
        p1.innerText = `Goal! ${attackName}'s shot hit the back of the net!`;
    }
    else if (attackRating < defenseRating) {
        p1.innerText = `Shut down! ${defenseName} locked up the attacker and the shot clock expired!`;
    }
}
