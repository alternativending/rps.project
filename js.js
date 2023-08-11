let randnum = Math.floor(Math.random() * 3) +1

function getComputerChoice(randnum) {
    if (randnum == 1) {return "Rock"}
    else if (randnum == 2) {return "Paper"}
    else {return "Scissors"}
}

let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase()
console.log("U chose: " + playerSelection)

let computerSelection = getComputerChoice(randnum)
console.log("Computer chose: " + computerSelection)

function singleRound (playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "Scissors") {return "U win"}
    else if (playerSelection == "ROCK" && computerSelection == "Paper") {return "U lose"}
    else if (playerSelection == "PAPER" && computerSelection == "Rock") {return "U win"}
    else if (playerSelection == "PAPER" && computerSelection == "Scissors") {return "U lose"}
    else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {return "U win"}
    else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {return "U lose"}
    else if (playerSelection == computerSelection.toUpperCase()) {return "It's a tie"}
}

alert(singleRound(playerSelection, computerSelection))
