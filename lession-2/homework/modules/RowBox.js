import {Box} from "./Box.js"

class RowBox{
    divRowBox
    numberBoxItem
    listBoxItem = []
    constructor(num){
        this.divRowBox = document.createElement("div");
        this.divRowBox.classList.add("row-box");
        this.numberBoxItem = num;
        for(let i = 0; i < this.numberBoxItem ; i++ ) {
            this.listBoxItem.push(new Box);
        }
        for(let lb of this.listBoxItem){
            this.divRowBox.insertAdjacentElement("beforeend",lb.html());
        }
    }
    html(){
        return this.divRowBox;
    }
}

export {RowBox}