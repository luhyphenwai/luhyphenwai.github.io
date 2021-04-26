import SnakeBody from "./snakebody.js";

export default class InputHandler{
    constructor(snakeHead){
        this.snakeHead = snakeHead;
        addEventListener("keydown", (key) =>{
            switch (key.key) {
                case "ArrowUp":
                    snakeHead.speed.x = 0;
                    snakeHead.speed.y = -1;
                    break;
                case "ArrowDown":
                    snakeHead.speed.x = 0;
                    snakeHead.speed.y = 1;
                    break;
                case "ArrowLeft":
                    snakeHead.speed.x = -1;
                    snakeHead.speed.y = 0;
                    break;
                case "ArrowRight":
                    snakeHead.speed.x = 1;
                    snakeHead.speed.y = 0;
                    break;
                default:
                    break;
            }
        });

        addEventListener("keydown", (key) =>{
            switch (key.key) {
                case "ArrowUp":
                    snakeHead.speed.x = 0;
                    snakeHead.speed.y = -1;
                    break;
                case "ArrowDown":
                    snakeHead.speed.x = 0;
                    snakeHead.speed.y = 1;
                    break;
                case "ArrowLeft":
                    snakeHead.speed.x = -1;
                    snakeHead.speed.y = 0;
                    break;
                case "ArrowRight":
                    snakeHead.speed.x = 1;
                    snakeHead.speed.y = 0;
                    break;
                default:
                    break;
            }
        });
    }
}