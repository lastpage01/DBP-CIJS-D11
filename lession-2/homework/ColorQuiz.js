import {Time} from "./modules/Timer.js"
import {RowBox} from "./modules/RowBox.js"
// let color;
// let color_light;
class ColorQuiz{
    color;
    color_light;
    listRowBox = []
    listItem
    numberRowBox = 3
    numberBoxItem = 3
    classTime = new Time();
    paintBody(){
        let body = document.querySelector('body');
        let divContainer = document.createElement("div");
        divContainer.setAttribute("id","container");
        body.insertAdjacentElement("beforeend",divContainer);
        //
        let divTime = document.createElement("div");
        divTime.setAttribute("id","time");

        let divBox = document.createElement("div");
        divBox.setAttribute("id","box");

        divContainer.insertAdjacentElement("beforeend",divTime);
        divContainer.insertAdjacentElement("beforeend",divBox);
    }
    paintTime(){
        
        let divTime = document.getElementById("time")
        divTime.insertAdjacentElement("beforeend",this.classTime.html());
    }
    paintBox(){
        
        let divBox = document.getElementById("box")
        for(let i = 0; i < this.numberRowBox ; i++ ) {
            this.listRowBox.push(new RowBox(this.numberBoxItem));
        }
        for(let lb of this.listRowBox){
            divBox.insertAdjacentElement("beforeend",lb.html());
        }
    }
    getListItem(){
        this.listItem = document.querySelectorAll(".item");
    }
    evenItem(){
        for(let i = 0; i<= this.listItem.length;i++){
            this.listItem[i].addEventListener("click",(e)=>{
                this.startgame(e);
            });
        }
    }
    startgame(e){
        if(e.target.style.backgroundColor == this.color){
            this.classTime.timeStop();
            alert("Lost");
        }
        else{
            this.random_Color_Game();
            this.classTime.timeStop();
            this.classTime.timeStart(this.color);
        }
    }
    random_Color_Game(){
        this.getRandomColor();
        let light = this.getRandomNumber();
        for(let i = 0; i < this.listItem.length; i++){
            if(light == i){
                this.listItem[i].style.backgroundColor = this.color_light;
            }
            else this.listItem[i].style.backgroundColor = this.color;
        }
    }
    getRandomColor(){
        let x,y,z;
        x = Math.floor(Math.random()*190);
        y = Math.floor(Math.random()*190);
        z = Math.floor(Math.random()*190);
        this.color = `rgb(${x}, ${y}, ${z})`;
        this.color_light = `rgb(${x+60}, ${y+60}, ${z+60})`;
    }
    getRandomNumber(){
        return Math.floor(Math.random() * (this.numberRowBox*this.numberBoxItem));
    }
}


//main()
    let runColorQuiz = new ColorQuiz();
    //paint
    runColorQuiz.paintBody();
    runColorQuiz.paintTime();
    runColorQuiz.paintBox();
    //get class item
    runColorQuiz.getListItem();
    // random màu
    runColorQuiz.random_Color_Game();
    //time
    runColorQuiz.classTime.timeStart(runColorQuiz.color);
    //sự kiện click
    runColorQuiz.evenItem();

