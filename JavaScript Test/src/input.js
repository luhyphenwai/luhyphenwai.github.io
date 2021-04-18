export default class InputHandler{
    constructor(){
        document.addEventListener('keydown', (event) => {
            alert(event.key);
            switch(event.key){
                case "ArrowLeft":
                    alert("move left");
                    break;
                case "ArrowRight":
                    alert("move right");
                    break;
                    
            }
        });
    }
}