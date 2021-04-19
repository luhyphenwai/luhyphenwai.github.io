//@ts-check
import SnakeBody from "./snakebody.js";
import InputHandler from "./input.js";
import Apple from "./apple.js";

// References
let canvas = document.getElementById("Snake");

// @ts-expect-error
let ctx = canvas.getContext("2d");

// Constants
const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;

const GRID_SIZE = 20;

const GAME_SPEED = 100;

let snake = [] 
snake.push(new SnakeBody(true, GRID_SIZE, GAME_WIDTH));
for(let i = 1; i < 5; i++){
    snake.push(new SnakeBody(false, GRID_SIZE, GAME_WIDTH, snake[i-1]));
}
new InputHandler(snake[0]);

let apple = new Apple(GRID_SIZE,GAME_WIDTH);

// Start game
requestAnimationFrame(gameLoop);

// Game Loop
let last = -GAME_SPEED;
function gameLoop(dt){
    if (dt-last > GAME_SPEED){
        // Clear screen
        ctx.clearRect(0,0,400,400);

        
        snake.forEach(snakeBody => snakeBody.update());
        snake.forEach(snakeBody => snakeBody.draw(ctx));
        apple.draw(ctx);
        apple.update(snake);

        if (score != apple.score){
            snake.push(new SnakeBody(false, GRID_SIZE, GAME_WIDTH, snake[snake.length-1]));

        }
        score = apple.score;
        
        scoreBoard();

        // Update last time
        last = dt;
    }
    

    requestAnimationFrame(gameLoop);
}

let score = 0;
function scoreBoard(){
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(400, 20);
    ctx.stroke();
    ctx.font = "20px sans-serif"
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, 200, 18)
    
    ctx.textAlign = "center";
    ctx.fillText(apple.position.x + " " + apple.position.y, 60, 18)
}