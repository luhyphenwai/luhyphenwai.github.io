export default class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    set(x,y){
        this.x = x;
        this.y = y;
    }

    drawLine(position, ctx){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(position.x,position.y);
        ctx.stroke();
    }
}
