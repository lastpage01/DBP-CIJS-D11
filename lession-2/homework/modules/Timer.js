class Time{
    divTimer
    timeRun
    box_time
    constructor(){
        this.divTimer = document.createElement("div");
        this.divTimer.setAttribute("id","time-run");
    }
    html(){
        return this.divTimer;
    }
    timeStart(color){
        this.box_time = document.getElementById("time-run");
        this.box_time.style.backgroundColor = color;
        let time = 100;
        this.timeRun = setInterval(() => {
            this.box_time.style.width = --time + '%';
            if(time <-1){
                clearInterval(this.timeRun);
                alert("Lost");
    
            }
        }, 50);
    }
    timeStop(){
        clearInterval(this.timeRun);
    }
}
export {Time}