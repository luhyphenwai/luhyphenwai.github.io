//@ts-check
import SnakeBody from "./snakebody.js";
import InputHandler from "./input.js";
import Apple from "./apple.js";

// References
let canvas = document.getElementById("Snake");

// @ts-expect-error
let ctx = canvas.getContext("2d");

// Constants
const GAME_SIZE = 400;

const GRID_SIZE = 20;

const GAME_SPEED = 100;

let started = false;
let gameStarted = false;


let snake = [];
let apple = new Apple(GRID_SIZE,GAME_SIZE);
let score = 0;

// Start game
function start(){
    snake = [];
    snake.push(new SnakeBody(true, GRID_SIZE, GAME_SIZE));
    for(let i = 1; i < 5; i++){
        snake.push(new SnakeBody(false, GRID_SIZE, GAME_SIZE, snake[i-1]));
    }
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
            snake.push(new SnakeBody(false, GRID_SIZE, GAME_SIZE, snake[snake.length-1]));
        }
        score = apple.score;
        

        // Check if snake has died
        if (snake[0].dead && (snake[0].speed.x != 0 || snake[0].speed.y != 0)){
            start();
        }   else if (snake[0].dead && snake[0].speed.x == 0 && snake[0].speed.y == 0){
            start();
            gameOverScreen();
            gameStarted = false;
        }

        // Log to check that the player has played this game before
        if (snake[0].speed.x!== 0 || snake[0].speed.y != 0){
            started = true
        }

        // Check when game starts to reset score
        if ((snake[0].speed.x!= 0 || snake[0].speed.y != 0) && !gameStarted ){
            apple.score = 0;
            score = 0;
            gameStarted = true;
        }

        // Draw scoreboard
        scoreBoard();

        // Update last time
        last = dt;
    }
    

    requestAnimationFrame(gameLoop);
}

function scoreBoard(){
    // Clear scoreboard section
    ctx.clearRect(0,0,400,20);

    // Draw score

    // Draw bottom line
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(400, 20);
    ctx.stroke();

    // Draw score text
    ctx.font = "20px sans-serif"
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, 200, 18)
}

// Draw grid 
// function grid(){
//     ctx.fillStyle = "#000000";
//     for(let x = 0; x < GAME_SIZE/GRID_SIZE; x++){
            
//         ctx.beginPath();
//         ctx.moveTo(x * GRID_SIZE, 0);
//         ctx.lineTo(x * GRID_SIZE, GAME_SIZE);
//         ctx.stroke();
        

//     }
//     for(let y = 0; y < GAME_SIZE/GRID_SIZE; y++){
                
//         ctx.beginPath();
//         ctx.moveTo(0, y * GRID_SIZE);
//         ctx.lineTo(GAME_SIZE, y * GRID_SIZE);
//         ctx.stroke();
//     }
// }

function gameOverScreen(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0,0,GAME_SIZE,GAME_SIZE);
    
    // Draw text
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.font = "20px sans-serif"
    ctx.textAlign = "center";
    if (!started){
        ctx.fillText("Press the arrow keys to start " , GAME_SIZE/2, GAME_SIZE/5)
    } else {
        ctx.fillText("You Died: Final Score: " + score , GAME_SIZE/2, GAME_SIZE/5)
        ctx.fillText("Press the arrow keys to play again " , GAME_SIZE/2, GAME_SIZE/4)
    }
}

// Apple bug testing button
document.getElementById("bruh").onclick = function() {doThing()};
function doThing(){
    apple.newPosition();
}