let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (timerId !== null) return; // Prevent multiple timers
    
    startBtn.disabled = true;
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft === 0) {
            stopTimer();
            alert('Time is up!');
            resetTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
    startBtn.disabled = false;
}

function resetTimer() {
    timeLeft = 25 * 60;
    updateDisplay();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', () => {
    stopTimer();
    resetTimer();
});

// Initial display
updateDisplay(); 