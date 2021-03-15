function game() {
    let playerScore = document.querySelector("#player-score");
    let playerSign = document.querySelector(".player-sign");
    let computerScore = document.querySelector("#computer-score");
    let computerSign = document.querySelector(".computer-sign");
    const btns = document.querySelectorAll(".btn");
    const reset = document.querySelector(".btn-reset");
    const choices = ["rock", "paper", "scissors"];
    let scoreOfPlayer = 0;
    let scoreOfComputer = 0;

    // starts the game by getting the values of player and computer
    function play(btn) {
        const playerSignVal = btn.getAttribute("data-sign");
        const computerSignVal = computerChoice();
        playerSign.classList.add("shake");
        computerSign.classList.add("shake-Computer");
        playerSign.src = "assets/rock.png";
        computerSign.src = "assets/rock.png";
        setTimeout(function () {
            updateScore(playerSignVal, computerSignVal);
            playerSign.classList.remove("shake");
            computerSign.classList.remove("shake-Computer");
        }, 700);
    }
    // make changes on the screen
    function updateScore(playerChoice, computerChoice) {
        const result = getResult(playerChoice, computerChoice);
        playerSign.src = `assets/${playerChoice}.png`;
        computerSign.src = `assets/${computerChoice}.png`;
        if (result === "player") {
            scoreOfPlayer++;
            playerScore.innerText = scoreOfPlayer;
        } else if (result === "computer") {
            scoreOfComputer++;
            computerScore.innerText = scoreOfComputer;
        }
    }
    btns.forEach(function (btn) {
        btn.addEventListener("click", () => {
            play(btn);
        });
    });
    // resets the game
    reset.addEventListener("click", () => {
        playerScore.innerText = "0";
        computerScore.innerText = "0";
        playerSign.src = `assets/rock.png`;
        computerSign.src = `assets/rock.png`;
        scoreOfComputer = 0;
        scoreOfPlayer = 0;
    });
    // randomly picks out of rock, paper and scissors
    function computerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }
    // checks who won the game
    function getResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) return "draw";
        else if (playerChoice === "rock") {
            if (computerChoice === "paper") return "computer";
            else if (computerChoice === "scissors") return "player";
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                return "player";
            } else if (computerChoice === "scissors") {
                return "computer";
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                return "computer";
            } else if (computerChoice === "paper") {
                return "player";
            }
        }
    }
}

game();
