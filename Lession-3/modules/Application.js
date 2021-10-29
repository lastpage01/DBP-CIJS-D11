import {Timer} from "./Timer.js"
import {Boxes} from "./Boxes.js"
class Application{
    timer = null;
    boxes = null;
    main = null;
    trueColor = null;
    falseColor = null;
    constructor(){
        const main = document.createElement("div");
        main.id = "main";
        document.getElementById("body").insertAdjacentElement("afterbegin",main);
        main.addEventListener("selectColor",this.handlerSelect);
        main.addEventListener("gameLose",this.handlerLose);
        main.addEventListener("gameWin",this.handlerWin);

        this.main = main;
        this.timer = new Timer(3);
        this.boxes = new Boxes(9);
    }
    handlerLose =()=>{
        this.timer.stop();
        alert("You lose!");
    }
    handlerWin = ()=>{
        this.timer.stop();
        this.timer.start();
        this.timer.reset();
        this.newColor();
        this.boxes.initColor(this.trueColor,this.falseColor);
    }
    randomNumber(to){
        return Math.floor(Math.random()*to);
    }
    newColor=()=>{
        let red = this.randomNumber(190);
        let green = this.randomNumber(190);
        let blue = this.randomNumber(190);
        this.trueColor = `rgb(${red}, ${green}, ${blue})`;
        this.falseColor = `rgb(${red+60}, ${green+60}, ${blue+60})`;
    }
    handlerSelect=(event)=>{
        // console.log(event.detail);
        let color = event.detail.color ||null;
        if(color == this.falseColor){
            this.main.dispatchEvent(new CustomEvent("gameWin"));
        }
        else this.main.dispatchEvent(new CustomEvent("gameLose"));
    }
    init(){
        this.main.insertAdjacentElement("beforeend",this.timer.html());
        this.main.insertAdjacentElement("beforeend",this.boxes.html());
        this.newColor();
        this.boxes.initColor(this.trueColor,this.falseColor);
        this.timer.start();
    }
}

export{Application}

