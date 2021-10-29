import { Box } from "./Box.js";
class Boxes{
    boxes = null;
    boxesArray = [];
    amount = null;
    constructor(amount){
        this.amount = amount;
        const boxes = document.createElement("div");
        boxes.classList.add("boxes");
        for(let i = 0 ; i < amount ; i++){
            const box = new Box()
            boxes.insertAdjacentElement("beforeend", box.html())
            this.boxesArray.push(box);
        }
        
        this.boxes = boxes;
    }
    initColor(truColor,falseColor){
        const random = parseInt(Math.random()*this.amount);
        for(let i = 0 ;i<this.amount;i++){
            if(i == random)
                this.boxesArray[i].setColor(falseColor);
            else this.boxesArray[i].setColor(truColor);
        }
    }
    html(){
        return this.boxes
    }
}
export{Boxes}