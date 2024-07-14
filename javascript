let timer; // To hold setInterval() reference
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function updateDisplay() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("display").innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStopBtn").innerText = "Start";
}