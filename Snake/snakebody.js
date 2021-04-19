//@ts-check
export default class SnakeBody{
    constructor(isHead, size, gameSize, snakeAhead, snakeHead){
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
                x: 40,
                y: 40
            }
        }

        this.speed = {
            x: 1,
            y: 0
        };
        
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
        
        // Wrap snake
        if (this.position.x > this.gameSize){
            this.position.x = 0;
        }   
        if (this.position.x < 0){
            this.position.x = this.gameSize;
        }
        if (this.position.y > this.gameSize){
            this.position.y = this.size;
        }   
        if (this.position.y <this.size){
            this.position.y = this.gameSize;
        }
    }

}