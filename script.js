// Defining starting array for choices in the game.
const gameChoices = ["Rock", "Paper", "Scissors"]; 

function computerPlay() {
    // this function will randomly return either "Rock", "Paper" or "Scissors".

    const random = Math.floor(Math.random() * gameChoices.length);
    
    return gameChoices[random]
}

//let computerSelection = computerPlay()
// let playerSelection = prompt("Enter your chosen weapon!")



function playRound(playerSelection, computerSelection) {
    computerSelection = "Rock"
    playerSelection = String(prompt("Enter your chosen weapon!"));
    if (playerSelection == computerSelection) {
        return "Tie Game"
    }
    else {
        return "playerSelection == computer Selection is false" 
    }
}

function playRound() {
// to run one round of the game.
} 