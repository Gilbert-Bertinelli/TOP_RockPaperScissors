document.addEventListener("DOMContentLoaded", function () {
  let log = console.log;
  let targetScore = 5;
  let humanScore = 0;
  let computerScore = 0;
  const body = document.querySelector("body");
  const pHumanScore = document.querySelector("#human-score");
  const pComputerScore = document.querySelector("#computer-score");
  const divRound = document.querySelector("#round");
  const divComputerHand = document.querySelector("#computer-hand");
  const divHumanHand = document.querySelector("#human-hand");
  const divWinner = document.querySelector("#winner");

  // Button creation
  const divButtons = document.querySelector("#buttons");
  const btnRock = document.createElement("button");
  const btnPaper = document.createElement("button");
  const btnScissors = document.createElement("button");

  btnPaper.textContent = "Paper";
  btnPaper.className = "paper";
  btnRock.textContent = "Rock";
  btnRock.className = "rock";
  btnScissors.textContent = "Scissors";
  ("Scissors");
  btnScissors.className = "scissors";
  divButtons.appendChild(btnScissors);
  divButtons.appendChild(btnPaper);
  divButtons.appendChild(btnRock);

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  console.log("saved theme is:" + savedTheme);
  document.documentElement.setAttribute("data-theme", savedTheme);

  function changeTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  // create function to convert the number- Value of the chosen hand into a human readable one.
  function returnHand(hand) {
    switch (hand) {
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
      default:
        return undefined;
    }
  }

  // Function to calculate the Choice of the Computer
  function getComputerChoice() {
    // get random number
    let random = Math.floor(Math.random() * 100);
    // log(random);
    // devide into thirds and assign every third one of the possible hands
    if (random <= 33) {
      return 1; //Rock
    } else if (random <= 66) {
      return 2; // Paper
    } else {
      return 3; //Scissors
    }
  }

  // create function to calculate the outcome of the game
  function playRound(humanHand, computerHand) {
    let result = humanHand.toString() + computerHand.toString();
    // log(result);
    switch (result) {
      case "13":
      case "21":
      case "32":
        humanScore++;
        divComputerHand.textContent = "Human:    " + returnHand(computerHand);
        divHumanHand.textContent = "Computer: " + returnHand(humanHand);
        divWinner.textContent = "Congrratulations, you Won the match.";
        break;

      case "12":
      case "23":
      case "31":
        computerScore++;
        divComputerHand.textContent = "Human:    " + returnHand(computerHand);
        divHumanHand.textContent = "Computer: " + returnHand(humanHand);
        divWinner.textContent =
          "The computer won the match. Better luck next time!";
        break;

      default:
        divComputerHand.textContent = "Human:    " + returnHand(computerHand);
        divHumanHand.textContent = "Computer: " + returnHand(humanHand);
        divWinner.textContent = "You drawed with the computer. Try again.";
        break;
    }

    pHumanScore.textContent = humanScore;
    pComputerScore.textContent = computerScore;
  }

  body.addEventListener("click", function (e) {
    if (e.target.className === "scissors") {
      playRound(3, getComputerChoice());
    } else if (e.target.className === "paper") {
      playRound(2, getComputerChoice());
    } else if (e.target.className === "rock") {
      playRound(1, getComputerChoice());
    }

    if (humanScore === targetScore) {
      alert("Congratulations, you won!");
      humanScore = 0;
      computerScore = 0;
      pHumanScore.textContent = humanScore;
      pComputerScore.textContent = computerScore;
    }

    if (computerScore === targetScore) {
      alert("You lost. Better luck next time!");
      humanScore = 0;
      computerScore = 0;
      pHumanScore.textContent = humanScore;
      pComputerScore.textContent = computerScore;
    }

    if (e.target.id === "header") {
      changeTheme();
    }
  });
});

const ttt = 3;
