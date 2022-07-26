// Defining starting array for choices in the game.
const gameChoicesList = document.querySelectorAll('.btn-choice');
const gameChoicesListArray = Array.from(gameChoicesList);
let options = [];

gameChoicesListArray.forEach((gameChoice) => {
    options.push(`${gameChoice.id}`);
 });
// gameChoices.forEach((choice) =>{
//     choice.addEventListener("click", playRound(gameChoices.id)) 
// });

let playerScore = 0;
let computerScore =0;

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
// game() runs the playRound() function 5 times, keeps score and reports a winner or loser at the end.
// function game () {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//         console.log(`Round ${i+1} results:`)
//         console.log(result);
//      }
//      return console.log(`PLAYER ${playerScore} vs ${computerScore} COMPUTER`)
// }
