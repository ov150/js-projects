const displayTime = document.querySelector("#displayTime");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milisec = 0;
startBtn.addEventListener("click", ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", ()=>{
    if(!paused){
        paused =true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    milisec = 0;
    secs = 0;
    mins = 0;
    hrs = 0;
    milisec = pad(milisec);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs); 
    displayTime.textContent = `${hrs} : ${mins} : ${secs} : ${milisec}`;
    
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    milisec = Math.floor(elapsedTime);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs); 

    displayTime.textContent = `${hrs} : ${mins} : ${secs} : ${milisec}`;
   
    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
