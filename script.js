let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  millisecondsDisplay.textContent = milliseconds.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
}

function startStopwatch() {
  timer = setInterval(() => {
    milliseconds += 10;
    if (milliseconds >= 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(timer);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
