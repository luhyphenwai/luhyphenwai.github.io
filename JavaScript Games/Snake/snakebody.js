//@ts-check
export default class SnakeBody{
    constructor(isHead, size, gameSize, snakeAhead){
        this.isHead = isHead;
        this.gameSize = gameSize;

        this.snakeAhead = snakeAhead;
        this.size = size;

        if (!isHead){
            this.position ={
                x: snakeAhead.position.x,
                y: snakeAhead.position.y
            }
        }else {
            this.position ={
                x: gameSize/2-size,
                y: gameSize/2-size
            }
        }

        this.speed = {
            x: 0,
            y: 0
        };

        this.dead = false;
        
    }

    draw(ctx){
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(){

        // Set position
        this.position.x += this.speed.x*this.size;
        this.position.y += this.speed.y*this.size;
        
        // Set speed to match snake ahead
        if (!this.isHead){
            this.speed.x = Math.sign(this.snakeAhead.position.x - this.position.x);
            this.speed.y = Math.sign(this.snakeAhead.position.y - this.position.y);
        }
        
        // Kill snake
        if (this.position.x > this.gameSize-this.size){
            this.dead = true;
        }   
        if (this.position.x < 0){
            this.dead = true;
        }
        if (this.position.y > this.gameSize){
            this.dead = true;
        }   
        if (this.position.y < this.size){
            this.dead = true;
        }
    }

}