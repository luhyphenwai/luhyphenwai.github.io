//@ts-check
export default class Apple{
    constructor(size, gameSize){
        this.size = size;
        this.gameSize = gameSize;
        this.newPosition();
        this.score = 0;
    }

    draw(ctx){
        ctx.fillStyle = "#FF0000"
        ctx.fillRect(this.position.x, this.position.y, this.size,this.size);
    }

    update(snake){
        snake.forEach((body,index) => {
            if (index == 0){
                if (body.position.x == this.position.x && 
                    body.position.y == this.position.y){
                    this.newPosition();
                    this.score += 1;
                }
            }   else {
                if (body.position.x == this.position.x && 
                    body.position.y == this.position.y){
                    this.newPosition();
                }
            }
        });
    }

    newPosition(){
        this.position = {
            x: Math.round(Math.random() * Math.abs(this.gameSize/this.size-1)) * this.size,
            y: Math.round((Math.random() * Math.abs(this.gameSize/this.size-2)) + 1) * this.size
        }
    }
}