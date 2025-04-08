let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
    const choices = ["stone", "paper", "sword"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        drawScore++;
        return `It's a tie! Both chose ${playerChoice}`;
    } else if (
        (playerChoice === "stone" && computerChoice === "sword") ||
        (playerChoice === "paper" && computerChoice === "stone") ||
        (playerChoice === "sword" && computerChoice === "paper")
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function updateScoreboard(result) {
    document.getElementById("result").innerText = result;
    document.getElementById("player-score").innerText = `Player: ${playerScore}`;
    document.getElementById("computer-score").innerText = `Computer: ${computerScore}`;
    document.getElementById("draw-score").innerText = `Draws: ${drawScore}`;

    if (playerScore === 10) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 10) {
        alert("Game over! The computer won.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById("result").innerText = "Game reset. Start playing!";
    document.getElementById("player-score").innerText = "Player: 0";
    document.getElementById("computer-score").innerText = "Computer: 0";
    document.getElementById("draw-score").innerText = "Draws: 0";
}

document.getElementById("stone").addEventListener("click", () => {
    const result = playRound("stone");
    updateScoreboard(result);
});

document.getElementById("paper").addEventListener("click", () => {
    const result = playRound("paper");
    updateScoreboard(result);
});

document.getElementById("sword").addEventListener("click", () => {
    const result = playRound("sword");
    updateScoreboard(result);
});
