class Box{
    div = null;
    constructor(){
        const div = document.createElement("div");
        div.classList.add("box");
        div.addEventListener("click",this.handlerClick);
        this.div = div;
    }
    handlerClick=()=>{
        let color = this.div.style.backgroundColor
        this.div.dispatchEvent(new CustomEvent("selectColor",{bubbles : true,detail:{color:color}}));
    }
    html(){
        return this.div
    }
    setColor(color){
        this.div.style.backgroundColor = color;
    }
}

export {Box}