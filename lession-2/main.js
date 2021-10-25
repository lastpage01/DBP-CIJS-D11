import { Box } from "./module/box.js";
const noBox = 4;
const listBox = [];

for(let i = 0 ; i < noBox ; i++){
    listBox.push(new Box);
}

const app = document.getElementById("app");

for(let b of listBox){
    app.insertAdjacentElement("beforeend",b.html());
}