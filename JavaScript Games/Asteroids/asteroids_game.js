//@ts-check

// Import classes
import Game from "./game.js";

// References
let canvas = document.getElementById("Asteroids");
//@ts-expect-error
let ctx = canvas.getContext("2d");

const GAME_SIZE = canvas.clientWidth;
const SHIP_SIZE = 20;

let game = new Game(GAME_SIZE, SHIP_SIZE);

requestAnimationFrame(gameLoop);

let elapsed = 0;
function gameLoop(dt){
    var time = dt-elapsed;
    elapsed = dt;
    game.draw(ctx);
    game.update(time);
    requestAnimationFrame(gameLoop);
    // document.getElementById("bruh").textContent = dt.toString();
}