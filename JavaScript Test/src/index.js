import Paddle from "./paddle.js";
import InputHandler from "./input.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler();

let lastTime = 0;
function gameLoop(timeStamp){
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH ,GAME_HEIGHT);
    
    paddle.update(dt);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();
ctx.fillRect(20,20,50,50);
