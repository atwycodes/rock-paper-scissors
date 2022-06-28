// Defining starting array for choices in the game.
const gameChoices = ["Rock", "Paper", "Scissors"]; 

function computerPlay() {
    // this function will randomly return either "Rock", "Paper" or "Scissors".

    const random = Math.floor(Math.random() * gameChoices.length);

    return gameChoices[random]
}

