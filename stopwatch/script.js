let [seconds,minutes, hours, milisec] = [0,0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stapWatch(){
    milisec++;
    if(milisec == 60){
        milisec = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0"+hours: hours;
    let m = minutes < 10 ? "0"+minutes: minutes;
    let s = seconds < 10 ? "0"+seconds: seconds;
    let ms = milisec < 10 ? "0"+milisec : milisec;


    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function watchStart(){
    if(timer!= null){
        clearInterval(timer);
    }
    timer = setInterval(stapWatch, 1000);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours, milisec] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00:00";
}