let timerInterval;

function incrementScore(team, points) {
    const scoreElement = document.getElementById(`${team}-score`);
    let currentScore = parseInt(scoreElement.textContent, 10);
    currentScore += points;
    scoreElement.textContent = currentScore;
}

function resetScores() {
    document.getElementById('home-score').textContent = '0';
    document.getElementById('guest-score').textContent = '0';
}

function startTimer() {
    let time = 10 * 60; // 10 minutes in seconds
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (time <= 0) {
            clearInterval(timerInterval);
        }
        time--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = '10:00';
}
