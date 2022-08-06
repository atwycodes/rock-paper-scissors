// GAME CODE
options = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();

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
    
    if (playerSelection == computerSelection) {
        return result = `Tie Game. You selected ${playerSelection} & Your Opponent selected ${computerSelection}`;

    } else if (losingConditions[playerSelection] === computerSelection) {
        // player loses
        computerScore++;
        return result =  `You Lost... ${computerSelection} beats ${playerSelection}`;

    } else if (winningConditions[playerSelection] === computerSelection) {
        // player wins
        playerScore++;
        return result =  `You Won! ${playerSelection} beats ${computerSelection}` ;

    } else {
        return result =  `${playerSelection} is invalid. Please call the function again.`;
    }
}

// UI MANIPULATION

// EVENT LISTENING FOR CLICKS
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound("rock"));

// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// APPENDING CHOSEN WEAPONS
// const playerChoice = document.querySelector("#playerChoice");
// const playerContent = document.createElement("div");
// playerContent.textContent = `${playerSelection}`;
// playerChoice.appendChild(playerContent);

// const computerChoice = document.querySelector("#computerChoice");
// const computerContent = document.createElement("div");
// computerContent.textContent = `${computerSelection}`;
// computerChoice.appendChild(computerContent);


