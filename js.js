//function game () {
//    let player = 0
//    let computer = 0
//    for (let i = 0; i < 2; i++) {
//    let playerSelection = prompt("Rock, Paper or Scissors?")
//    let randnum = Math.floor(Math.random() * 3) +1
//    function getComputerChoice(randnum) {
//        if (randnum == 1) {return "Rock"}
//        else if (randnum == 2) {return "Paper"}
//        else {return "Scissors"}
//    }
//    let computerSelection = getComputerChoice(randnum)
//    if (singleRound(playerSelection, computerSelection) == "Player") {player = player +1}
//    else if (singleRound(playerSelection, computerSelection) == "Computer") {computer = computer +1}
//    console.log(singleRound(playerSelection, computerSelection) + " scores")
//    }
//    if (player > computer) {return console.log("Player wins")}
//    else if (computer > player) {return console.log("Computer wins")}
//   else {return console.log("It's a tie")}
//}

function singleRound (playerSelection, computerSelection) {
    return  (playerSelection == "Rock" && computerSelection == "Scissors") ? "Player":
            (playerSelection == "Rock" && computerSelection == "Paper") ? "Computer":
            (playerSelection == "Paper" && computerSelection == "Rock") ? "Player":
            (playerSelection == "Paper" && computerSelection == "Scissors") ? "Computer":
            (playerSelection == "Scissors" && computerSelection == "Paper") ? "Player":
            (playerSelection == "Scissors" && computerSelection == "Rock") ? "Computer":
            (playerSelection == computerSelection) ? "No one":
            null
}

function getComputerChoice(randnum) {
            if (randnum == 1) {return "Rock"}
            else if (randnum == 2) {return "Paper"}
            else {return "Scissors"}
}

const div = document.querySelector('#div');

let computerScore = 0
let playerScore = 0
let tieScore = 0

function score() {
    const playerSelection = "Rock";
    let randnum = Math.floor(Math.random() * 3) +1;
    const computerSelection = getComputerChoice(randnum);
    const result = singleRound(playerSelection, computerSelection);
    if (result == 'Computer') {
        computerScore = ++computerScore;
        const p1 = document.createElement('p');
        p1.textContent = 'Computer scores! Player score: ' + `${playerScore}` + '. Computer score:' + `${computerScore}` + '. Times no one scored:' + `${tieScore}`;
        div.appendChild(p1);
    }
    else if (result == 'Player') {
        playerScore = ++playerScore;
        const p2 = document.createElement('p');
        p2.textContent = 'Player scores! Player score: ' + `${playerScore}` + '. Computer score:' + `${computerScore}` + '. Times no one scored:' + `${tieScore}`;
        div.appendChild(p2);
    }
    else if (result == 'No one') {
        tieScore = ++tieScore;
        const p3 = document.createElement('p');
        p3.textContent = 'No one scores. Player score: ' + `${playerScore}` + '. Computer score:' + `${computerScore}` + '. Times no one scored:' + `${tieScore}`;
        div.appendChild(p3);
    }
    announceWinner();
}

function announceWinner() {
    if (computerScore == 5) {
        btn1.removeEventListener('click', score);
        btn2.removeEventListener('click', score);
        btn3.removeEventListener('click', score);
        const h1 = document.createElement('h1');
        h1.textContent = 'Computer Wins !!!';
        div.appendChild(h1);
    }
    else if (playerScore == 5) {
        btn1.removeEventListener('click', score);
        btn2.removeEventListener('click', score);
        btn3.removeEventListener('click', score);
        const h2 = document.createElement('h1');
        h2.textContent = 'Player Wins!!!';
        div.appendChild(h2);
    }
}

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', score);

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', score);

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', score);