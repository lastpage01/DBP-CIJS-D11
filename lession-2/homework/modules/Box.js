
class Box{
    divBoxItem
    constructor(){
        this.divBoxItem = document.createElement("div");
        this.divBoxItem.classList.add("item");
        
    }
    html(){
        return this.divBoxItem;
    }
    getdivBoxItem(){
        return this.divBoxItem;
    }
    

}

export {Box}