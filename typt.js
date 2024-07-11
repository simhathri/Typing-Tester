let startTime;
let interval;
let running = false;

const sampleText = document.getElementById('sampleText').innerText;
const typingArea = document.getElementById('typingArea');
const timerDisplay = document.getElementById('timer');
const congratulations = document.getElementById('congratulations');

function startTimer() {
    startTime = new Date();
    interval = setInterval(updateTime, 10);
    running = true;
}

function stopTimer() {
    clearInterval(interval);
    running = false;
}

function resetTimer() {
    stopTimer();
    timerDisplay.innerText = '00:00:00';
    congratulations.innerText = '';
    typingArea.value = '';
    typingArea.disabled = false;
}

function updateTime() {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime;
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = Math.floor((timeDiff % 60000) / 1000);
    const milliseconds = Math.floor((timeDiff % 1000) / 10);
    timerDisplay.innerText = `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

typingArea.addEventListener('input', () => {
    if (!running) {
        startTimer();
    }
    if (typingArea.value.trim() === sampleText) {
        stopTimer();
        typingArea.disabled = true;
        congratulations.innerText = 'Congratulations!';
    }
});

document.getElementById('btn_1').addEventListener('click', () => alert('Button 1 clicked'));
document.getElementById('btn_2').addEventListener('click', () => alert('Button 2 clicked'));
document.getElementById('btn_3').addEventListener('click', () => alert('Button 3 clicked'));
document.getElementById('btn_4').addEventListener('click', () => alert('Button 4 clicked'));
document.getElementById('btn_5').addEventListener('click', () => alert('Button 5 clicked'));

resetTimer(); // Ensure the timer is reset initially