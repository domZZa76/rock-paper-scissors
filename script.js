                        //COMPUTER SELECTION 

let randNumber = 0;
randNumber = Math.ceil(Math.random() * 3);

function computerChoice(randNumber) {
    if(randNumber === 1) {
        return 'rock'
    } else if (randNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
                        //PLAYER CHOICE

let popUp = prompt('What do you choose?');
let playerChoice = popUp.toLocaleLowerCase();

                        //PLAY ROUND

function playRound(playerChoice, computerChoice){
    if (
        playerChoice === computerChoice
    ) {
        return 'DRAW'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'WIN'
    } else {
        return 'LOSS'
    }
}