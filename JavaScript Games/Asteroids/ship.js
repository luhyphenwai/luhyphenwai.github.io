//@ts-check
import Vector from "./vector.js";

export default class Ship{
    constructor(game){
        this.game = game;
        this.size = game.shipSize;

        this.a = 270;
        this.position = {
            x: game.gameSize/2,
            y: game.gameSize/2
        }

        this.setShipPoints();

        this.speed = 0;
        this.speedSlowDown = game.speedSlowDown;

        this.maxSpeed = game.shipSpeed;

        this.angleSpeed = 0;
        this.angleSlowDown = game.angleSlowDown;
        
    }

    draw(ctx){
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        this.points.f.drawLine(this.points.r,ctx);
        this.points.r.drawLine(this.points.l,ctx);
        this.points.l.drawLine(this.points.f,ctx);
    }

    update(dt){
        this.a += this.angleSpeed*Math.PI/180/dt;
        if (this.angleSpeed != 0 ){
            this.angleSpeed -= this.angleSlowDown/dt*Math.sign(this.angleSpeed);
        }

        this.position.x += this.speed * Math.cos(this.a*Math.PI/180)/dt;
        this.position.y += this.speed * Math.sin(this.a*Math.PI/180)/dt;
        if (this.speed != 0 ){
            this.speed -= this.speedSlowDown/dt*Math.sign(this.speed);
        }
        this.setShipPoints();
    }

    setShipPoints(){
        this.points = {
            f: new Vector(this.position.x+this.size*Math.cos(this.a*Math.PI/180),this.position.y+this.size*Math.sin(this.a*Math.PI/180)),
            r: new Vector(this.position.x+this.size*Math.cos((this.a+130)*Math.PI/180),this.position.y+this.size*Math.sin((this.a+130)*Math.PI/180)),
            l: new Vector(this.position.x+this.size*Math.cos((this.a+230)*Math.PI/180),this.position.y+this.size*Math.sin((this.a+230)*Math.PI/180)),
        }
    }
}