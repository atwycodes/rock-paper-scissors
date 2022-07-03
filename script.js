// Defining starting array for choices in the game.
const gameChoices = ["Rock", "Paper", "Scissors"]; 

function computerPlay() {
    // this function will randomly return either "Rock", "Paper" or "Scissors".

    const random = Math.floor(Math.random() * gameChoices.length);
    
    return gameChoices[random]
}

// converting to lowercase to remove need for case-sensitive input

// if variable is a global function, it must be called as function(globalvar1, globalvar2)
let playerScore = 0;
let computerScore =0;

function playRound() {
    let computerSelection = computerPlay().toLowerCase(); 
    let playerSelection = String(prompt("Enter your chosen weapon!")).toLowerCase(); 
    if (playerSelection == computerSelection) {
        return result = `Tie Game. You selected ${playerSelection} & Your Opponent selected ${computerSelection}`
    // losing logic
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        computerScore++
        return result =  `You Lost... ${computerSelection} beats ${playerSelection}` 
    // winning logic
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        return result =  `You Won! ${playerSelection} beats ${computerSelection}` 
    } else {
        return result =  `${playerSelection} is invalid. Please call the function again.`
    }
}

// game() runs the playRound() function 5 times, keeps score and reports a winner or loser at the end.
function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Round ${i+1} results:`)
        console.log(result);
     }
     return console.log(`PLAYER ${playerScore} vs ${computerScore} COMPUTER`)
}
