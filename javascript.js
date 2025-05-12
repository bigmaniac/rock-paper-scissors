let computerScore = 0
let humanScore = 0
let round = 0

document.body.setAttribute("style", "display: flex; flex-direction: column");

const main = document.createElement("div");
main.classList.add("main");
main.setAttribute("style", "display: flex; justify-content: center")
document.body.appendChild(main);

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "The Rock Paper Scissors Game"
main.appendChild(title);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
buttons.setAttribute("style", "display: flex; justify-content: center")
document.body.appendChild(buttons);

const results = document.createElement("div");
results.classList.add("results");
results.setAttribute("style", "display: flex; flex-direction: column; align-items: center");
document.body.appendChild(results);

const roundInfo = document.createElement("p");
roundInfo.classList.add("roundInfo")
roundInfo.textContent = `Round: ${round}`;
results.appendChild(roundInfo);

const score = document.createElement("p");
score.classList.add("score");
score.textContent = `Your score: ${humanScore} vs CPU score: ${computerScore}`;
results.appendChild(score);

const roundResult = document.createElement("p");
roundResult.classList.add('roundResult')
results.appendChild(roundResult);


const btn_rock = document.createElement("button");
btn_rock.classList.add("btn_rock");
btn_rock.textContent = ("Rock")
buttons.appendChild(btn_rock);

const btn_paper = document.createElement("button");
btn_paper.classList.add("btn_paper");
btn_paper.textContent = ("Paper")
buttons.appendChild(btn_paper);

const btn_scissors = document.createElement("button");
btn_scissors.classList.add("btn_scissors");
btn_scissors.textContent = ("Scissors")
buttons.appendChild(btn_scissors);

// TODO: Change listeners to get node-list and make it reusable
// const choices = ["rock", "paper", "scissors"];

// choices.forEach(choice => {
//     const button = document.createElement("button");
//     button.classList.add(`btn_${choice}`);
//     button.textContent = choice.charAt(0).toUpperCase() + choice.slice(1); // Capitalize
//     button.addEventListener("click", () => {
//         playRound(choice, getComputerChoice());
//     });
//     buttons.appendChild(button);
// });

btn_rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

btn_paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btn_scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

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
        roundResult.textContent = `Tie game! Great minds think alike — both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        roundResult.textContent = `You win - ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        roundResult.textContent = `You lose - ${computerChoice} beats ${humanChoice}.`;
    }
    round++;
    score.textContent = `Your score: ${humanScore} vs CPU score: ${computerScore}`;
    roundInfo.textContent = `Round: ${round}`;

    checkWinnerAndReset();
}

function checkWinnerAndReset() {
    if (humanScore === 5) {
        alert("You win!");
        resetGame();
    } 
    else if (computerScore === 5) {
        alert('You loose!');
        resetGame();
    }
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    round = 0;
}