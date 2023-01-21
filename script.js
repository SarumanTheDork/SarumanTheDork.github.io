var count = 60;
var timer = document.getElementById("timer");
var intervalId;
var startBtn = document.getElementById("start-timer");
var pauseBtn = document.getElementById("pause-timer");
var restartBtn = document.getElementById("restart-timer");

function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        if(count > 0){
            count--;
            timer.innerHTML = count;
        }else{
            clearInterval(intervalId);
            timer.innerHTML = "Time's up!";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
}

function restartTimer() {
    clearInterval(intervalId);
    count = 60;
    timer.innerHTML = count;
    intervalId = setInterval(function() {
        if(count > 0){
            count--;
            timer.innerHTML = count;
        }else{
            clearInterval(intervalId);
            timer.innerHTML = "Time's up!";
        }
    }, 1000);
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
restartBtn.onclick = restartTimer;
