class Box{
    divElement
    constructor(){
        this.divElement = document.createElement("div");
        // this.divElement.setAttribute("class","items");
        this.divElement.classList.add("items");
        this.divElement.addEventListener("click",(event) =>{
            this.changeColor(this.randomColor());
            console.log(this.divElement);
        });
    }
    html(){
        return this.divElement;
    }
    randomNumber(num){
        return Number( Math.floor(Math.random() * num));
    }
    randomColor(){
        let r = this.randomNumber(255);
        let b = this.randomNumber(255);
        let g = this.randomNumber(255);
        return `rgb(${r},${b},${g})`;
    }
    changeColor(newColor){
        this.divElement.style.backgroundColor = newColor
    }


}

export {Box}