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


let snake = [];
let apple = new Apple(GRID_SIZE,GAME_WIDTH);
let score = 0;

// Start game
function start(){
    snake = [];
    snake.push(new SnakeBody(true, GRID_SIZE, GAME_WIDTH));
    for(let i = 1; i < 5; i++){
        snake.push(new SnakeBody(false, GRID_SIZE, GAME_WIDTH, snake[i-1]));
    }
    score = 0;
    apple.score = 0;
    new InputHandler(snake[0]);
}
start();
requestAnimationFrame(gameLoop);

// Game Loop
let last = -GAME_SPEED;
function gameLoop(dt){
    if (dt-last > GAME_SPEED ){
        // Clear screen
        ctx.clearRect(0,0,400,400);

        // Update and draw all items
        snake.forEach(snakeBody => snakeBody.update());
        snake.forEach(snakeBody => snakeBody.draw(ctx));
        apple.draw(ctx);
        apple.update(snake);

        // Check for snake body collision
        snake.forEach((snakeBody, index )=> {
            if (index != 0 && snakeBody.position.x == snake[0].position.x && snakeBody.position.y == snake[0].position.y ){
                snake[0].dead = true;
            }
        });

        // Check if score changed
        if (score != apple.score){
            snake.push(new SnakeBody(false, GRID_SIZE, GAME_WIDTH, snake[snake.length-1]));
        }
        score = apple.score;
        
        // Draw scoreboard
        scoreBoard();

        // Check if snake has died
        if (snake[0].dead){
            start();
        }

        // Update last time
        last = dt;
    }
    

    requestAnimationFrame(gameLoop);
}

function scoreBoard(){
    // Clear scoreboard section
    ctx.clearRect(0,0,400,20);

    // Draw score
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(400, 20);
    ctx.stroke();
    ctx.font = "20px sans-serif"
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, 200, 18)
}


// Apple bug testing button
document.getElementById("bruh").onclick = function() {doThing()};
function doThing(){
    apple.newPosition();
}