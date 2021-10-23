let box_items = document.querySelectorAll(".items");
for(let i = 0 ; i < 4 ; i ++){
    box_items[i].style.backgroundColor = getRandomColor();
    box_items[i].addEventListener("click",randomColor);
}
function getRandomColor(){
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}
function randomColor(e){
    e.target.style.backgroundColor = getRandomColor();
}