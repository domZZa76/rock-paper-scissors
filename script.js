//COMPUTER SELECTION 
function computerChoiceFormula() {
    const random = Math.ceil(Math.random() * 3);
    if(random === 1) {
        return 'rock';
    } else if (random === 2){
        return 'paper';
    } else {
        return 'scissors'
    }
}

//PLAY ROUND

function playRound(playerChoice, computerChoice) {
    if (
        playerChoice === computerChoice
    ) {
        return tie
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++
        return win
    } else {
        computerScore++
        return lose
    }
}
//PLAY GAME

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

for(var i=0;i<5;i++){
    let playerChoice = prompt("Pick a move").toLowerCase();
    const computerChoice = computerChoiceFormula()
    console.log(playRound(playerChoice, computerChoice))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }