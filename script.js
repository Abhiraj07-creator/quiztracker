function increaseScore(teamId) {
    const teamElement = document.getElementById(teamId);
    const scoreElement = teamElement.querySelector('.score');
    let currentScore = parseInt(scoreElement.textContent, 10);
    scoreElement.textContent = currentScore + 1;
}
