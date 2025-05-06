let computerChoice
let humanChoice
let computerScore = 0
let humanScore = 0

function getComputerChoice(max = 3) {
    let computerChoice = Math.floor(Math.random() * max)
    
    if (computerChoice === 0) {
        computerChoice = 'rock'
    }
    else if (computerChoice === 1) {
        computerChoice = 'paper'
    }
    else {
        computerChoice = 'scissors'
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt('Choose your move: rock, paper, or scissors. Type your choice and press Enter.')
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'rock') ||
        (humanChoice === 'paper' && computerChoice === 'paper') ||
        (humanChoice === 'scissors' && computerChoice === 'scissors')
    ) {
        console.log(`Tie game! Great minds think alike — both chose ${humanChoice}.`);
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win - ${humanChoice} beats ${computerChoice}.`);
        
    }
    else {
        computerScore++;
        console.log(`You lose - ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame () {
    for (let round = 1; round <= 5; round++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();