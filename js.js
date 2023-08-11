

function game () {
    let limit = 5
    let player = 0
    let computer = 0
    for (let i = 0; i < limit; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?")
    let randnum = Math.floor(Math.random() * 3) +1
    function getComputerChoice(randnum) {
        if (randnum == 1) {return "Rock"}
        else if (randnum == 2) {return "Paper"}
        else {return "Scissors"}
    }
    let computerSelection = getComputerChoice(randnum)
    if (singleRound(playerSelection, computerSelection) == "Player") {player = player +1}
    else if (singleRound(playerSelection, computerSelection) == "Computer") {computer = computer +1}
    console.log(singleRound(playerSelection, computerSelection) + " scores")
    }
    if (player > computer) {return console.log("Player wins")}
    else if (computer > player) {return console.log("Computer wins")}
    else {return console.log("It's a tie")}
}

function singleRound (playerSelection, computerSelection) {
    return (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS") ? "Player":
    (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") ? "Computer":
    (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") ? "Player":
    (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") ? "Computer":
    (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") ? "Player":
    (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") ? "Computer":
    (playerSelection.toUpperCase() == computerSelection.toUpperCase()) ? "No one":
    "Incorrect input"
}

game()