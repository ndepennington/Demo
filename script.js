let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const toggleBtn = document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');
const btnText = toggleBtn.querySelector('.btn-text');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (timerId !== null) return;
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft === 0) {
            stopTimer();
            alert('Time is up!');
            resetTimer();
            updateButtonState();
        }
    }, 1000);
    
    updateButtonState();
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
    updateButtonState();
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
    updateButtonState();
}

function updateButtonState() {
    if (timerId !== null) {
        toggleBtn.classList.add('running');
        btnText.textContent = 'Pause';
    } else {
        toggleBtn.classList.remove('running');
        btnText.textContent = 'Start';
    }
}

// Event listeners
toggleBtn.addEventListener('click', () => {
    if (timerId === null) {
        startTimer();
    } else {
        stopTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);

// Initial display
updateDisplay(); 