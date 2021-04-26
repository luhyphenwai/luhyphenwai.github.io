//@ts-check
import Ship from "./ship.js";

export default class Game{
    constructor(gameSize, shipSize){
        // Set size
        this.gameSize = gameSize;
        this.shipSize = shipSize;

        // Instantiate game objects
        this.gameObjects = [];

        this.shipSpeed = 50;
        this.speedSlowDown = 10
        this.angleSpeed = 1000;
        this.angleSlowDown = 500;

        this.gameObjects.push(new Ship(this));
        this.ship = this.gameObjects[0];

        this.keysPressed = {};
        // Set up input
        document.addEventListener("keydown", key =>{
            this.keysPressed[key.key] = true;
        });
        document.addEventListener("keyup", key =>{
            delete this.keysPressed[key.key];
        });

    }
    input(){
        if (this.keysPressed["ArrowUp"]){
            this.ship.speed = this.shipSpeed;

        }  
        if (this.keysPressed["ArrowDown"]){
            // this.ship.speed = -this.shipSpeed;

        }
        if (this.keysPressed["ArrowLeft"]){
            this.ship.angleSpeed = -this.angleSpeed;

        }
        if (this.keysPressed["ArrowRight"]){
            this.ship.angleSpeed = this.angleSpeed;
        } 
    }

    draw(ctx){
        ctx.fillRect(0,0,this.gameSize, this.gameSize);
        this.gameObjects.forEach(gameObject => gameObject.draw(ctx));
    }

    update(dt){
        this.input();
        this.gameObjects.forEach(gameObject => gameObject.update(dt));
    }

    detectCollision(objectA, objectB){

    }

    scoreboard(){

    }
}