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
results.setAttribute("style", "display: flex; justify-content: center");
const para = document.createElement("p");
results.appendChild(para);
document.body.appendChild(results);

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

btn_rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

btn_paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btn_scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

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
        para.textContent = `Tie game! Great minds think alike — both chose ${humanChoice}.`;

    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        para.textContent = `You win - ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        para.textContent = `You lose - ${computerChoice} beats ${humanChoice}.`;
    }
}
