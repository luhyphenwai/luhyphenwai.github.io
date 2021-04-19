let canvas = document.getElementById("asteroids");
let ctx = canvas.getContext("2d");

let elapsed = 0;
function gameLoop(){
    requestAnimationFrame(gameLoop);
}