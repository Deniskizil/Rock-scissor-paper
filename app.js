const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal button");
const game = document.querySelector(".game");
const pScore = document.querySelector(".player-score p");
const cScore = document.querySelector(".computer-score p");
const buttons = document.querySelectorAll(".buttons button");
const playerIcon = document.querySelector(".player-image img");
const computerIcon = document.querySelector(".computer-image img");
const scoreAnnounce = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;
const options = ["rock","paper","scissors"];

function startGame(){
    modal.classList.toggle("reveal");
}

modalButton.addEventListener("click", () => {
    modal.classList.toggle("reveal");
    modal.style.pointerEvents = "none";
    game.classList.toggle("reveal");
})

console.log(buttons);
buttons.forEach(item => {
    item.addEventListener("click", (e)=> {
        const playerDecision = e.target.getAttribute("data-value");
        const computerDecision = options[Math.floor(Math.random() * 3)];
        console.log(computerDecision);
        playerIcon.src = "./images/rock.svg";
        computerIcon.src = "./images/rock.svg";

        playerIcon.classList.toggle("move");
        computerIcon.classList.toggle("move");
        game.classList.toggle("disablebuttons");

        setTimeout(() => {
            playerIcon.classList.toggle("move");
            computerIcon.classList.toggle("move");
            game.classList.toggle("disablebuttons");
            playerIcon.src = `./images/${playerDecision}.svg`;
            computerIcon.src = `./images/${computerDecision}.svg`;
            gameresult(playerDecision, computerDecision)
        },1000)
    })
})

function gameresult(playerValue, computerValue){

    if(playerValue === "rock"){
        if(computerValue === "rock"){
            scoreAnnounce.textContent = "DRAW"
        }
        else if (computerValue === "paper"){
            scoreAnnounce.textContent = "Computer Wins";
            computerScore++;
            cScore.textContent = computerScore;
        }

        else if (computerValue === "scissors"){
            scoreAnnounce.textContent = "Player Wins";
            playerScore++;
            pScore.textContent = playerScore;
        }
    }

    if(playerValue === "paper"){

        if(computerValue === "rock"){
            scoreAnnounce.textContent = "Player Wins";
            playerScore++;
            pScore.textContent = playerScore;
        }
        else if (computerValue === "paper"){
            scoreAnnounce.textContent = "DRAW"
        }

        else if (computerValue === "scissors"){
            scoreAnnounce.textContent = "Computer Wins";
            computerScore++;
            cScore.textContent = computerScore;
        }
    }

    if(playerValue === "scissors"){

        if(computerValue === "rock"){
            scoreAnnounce.textContent = "Computer Wins";
            computerScore++;
            cScore.textContent = computerScore;
        }
        else if (computerValue === "paper"){
            scoreAnnounce.textContent = "Player Wins";
            playerScore++;
            pScore.textContent = playerScore;
        }

        else if (computerValue === "scissors"){
            scoreAnnounce.textContent = "DRAW"
        }
    }

}

startGame()