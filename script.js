// GAME CODE
options = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection,computerSelection) {
    const losingConditions = {
        rock: "paper",
        paper: "scissors",
        scissors: "rock",
    }
    
    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }
    
    if (playerSelection === computerSelection) {
        return result = `Tied game! You selected ${playerSelection} & your opponent selected ${computerSelection}.`;

    } else if (losingConditions[playerSelection] === computerSelection) {
        // player loses
        computerScore++;
        return result =  `You lost... ${computerSelection} beats ${playerSelection}.`;

    } else if (winningConditions[playerSelection] === computerSelection) {
        // player wins
        playerScore++;
        return result =  `You won! ${playerSelection} beats ${computerSelection}.` ;

    } else {
        return result =  `${playerSelection} is invalid. Please call the function again.`;
    }
}


// UI MANIPULATION
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const roundResult = document.querySelector("#round-result");
const playerScoreResult = document.querySelector("#player-choice");
const computerScoreResult = document.querySelector("#computer-choice");

const playerContent = document.createElement("div");
const computerContent = document.createElement("div");
const roundContent = document.createElement("div");
const playerScoreResultContent = document.createElement("div");
const computerScoreResultContent = document.createElement("div");

playerContent.setAttribute("class", "update-choice")
computerContent.setAttribute("class", "update-choice")
roundContent.setAttribute("class", "result")
playerScoreResultContent.setAttribute("class", "result")
computerScoreResultContent.setAttribute("class", "result")


function updateScore (playerSelection,computerSelection) {
    // switch statement to convert selection to emoji
    switch(playerSelection) {
        case "rock":
            playerEmoji = "✊"
            break;
        case "scissors":
            playerEmoji = "✌"
            break;
        case "paper":
            playerEmoji = "✋"
            break;
    }

    switch(computerSelection) {
        case "rock":
            computerEmoji = "✊"
            break;
        case "scissors":
            computerEmoji = "✌"
            break;
        case "paper":
            computerEmoji = "✋"
            break;
    }

    playerScoreResultContent.textContent = `${playerScore}`
    playerScoreResult.appendChild(playerScoreResultContent);

    computerScoreResultContent.textContent = `${computerScore}`
    computerScoreResult.appendChild(computerScoreResultContent);
    
    playerContent.textContent = `${playerEmoji}`;
    playerChoice.appendChild(playerContent);

    computerContent.textContent = `${computerEmoji}`;
    computerChoice.appendChild(computerContent);

    roundContent.textContent = `${result}`
    roundResult.appendChild(roundContent);



}

// EVENT LISTENING FOR CLICKS
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => handleClick("rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => handleClick("paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
    updateScore (playerSelection,computerSelection);
}
