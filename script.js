// Defining starting array for choices in the game.
const gameChoicesList = document.querySelectorAll('.btn-choice');
const gameChoicesListArray = Array.from(gameChoicesList); //convert nodelist to array
let options = [];

gameChoicesListArray.forEach((gameChoice) => {
    options.push(`${gameChoice.id}`);
 });

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    // this function will randomly return either "Rock", "Paper" or "Scissors"
    const random = Math.floor(Math.random() * options.length);
    return options[random]
}

function playRound() {
    let computerSelection = computerPlay().toLowerCase(); 
    let playerSelection = String(prompt("Enter your chosen weapon!")).toLowerCase(); 
    
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

// DOM Manipulation

const playerChoice = document.querySelector("#playerChoice");
const playerContent = document.createElement("div");
playerContent.textContent = "Test";
playerChoice.appendChild(playerContent);

const computerChoice = document.querySelector("#computerChoice");
const computerContent = document.createElement("div");
computerContent.textContent = "Test";
computerChoice.appendChild(computerContent);
