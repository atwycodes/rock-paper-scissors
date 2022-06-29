// Defining starting array for choices in the game.
const gameChoices = ["Rock", "Paper", "Scissors"]; 

function computerPlay() {
    // this function will randomly return either "Rock", "Paper" or "Scissors".

    const random = Math.floor(Math.random() * gameChoices.length);
    
    return gameChoices[random]
}

// converting to lowercase to remove need for case-sensitive input
let computerSelection = computerPlay().toLowerCase(); 
let playerSelection = String(prompt("Enter your chosen weapon!")).toLowerCase(); 

function playRound(playerSelection,computerSelection) {
  computerPlay()
  if (playerSelection == computerSelection) {
    return `Tie Game. You selected ${playerSelection} & Your Opponent selected ${computerSelection}`

  } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
    return `You Lost... ${computerSelection} beats ${playerSelection}` 

  } else {
    return `You Won! ${playerSelection} beats ${computerSelection}` 
  }
}


