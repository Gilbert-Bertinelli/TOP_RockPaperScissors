document.addEventListener("DOMContentLoaded", function () {
  let log = console.log;
  let targetScore = 5;
  let humanScore = 0;
  let computerScore = 0;

  // _________________________________________________________________________________________________
  // Helper Functions
  // _________________________________________________________________________________________________
  // create function to convert the users Chice to a number (1 = Rock, 2 = Paper, 3 = Scissors)
  function convertUserChoiceToNumber(userChoice) {
    if (userChoice != undefined) {
      userChoice = userChoice.toLowerCase();
      userChoice2 = userChoice.toLowerCase();
    }

    switch (userChoice) {
      case "rock":
      case "1":
        return 1;
      case "paper":
      case "2":
        return 2;
      case "scissors":
      case "3":
        return 3;
      default:
        return undefined;
    }
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

  // create function to calculate the outcome of the game
  function calculateWinner(humanHand, computerHand) {
    let result = humanHand.toString() + computerHand.toString();
    log(result);
    switch (result) {
      case "13":
      case "21":
      case "32":
        humanScore++;
        log("");
        log(`Computer chose: ${returnHand(computerHand)}`);
        log(`You chose: ${returnHand(humanHand)}`);
        log("Congrratulations, you Won the match.");
        break;

      case "12":
      case "23":
      case "31":
        computerScore++;
        log("");
        log(`Computer chose: ${returnHand(computerHand)}`);
        log(`You chose: ${returnHand(humanHand)}`);
        log("The computer won the match. Better luck next time!");
        break;

      default:
        log("");
        log(`Computer chose: ${returnHand(computerHand)}`);
        log(`You chose: ${returnHand(humanHand)}`);
        log("You drawed with the computer. Try again.");
        break;
    }
  }

  // _________________________________________________________________________________________________
  // create function getComputerChoice
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

  // _________________________________________________________________________________________________
  // create function getHumanChoice
  function getHumanChoice() {
    let repeat = true;
    let userChoice;
    while (repeat) {
      log("Plase choose one of the following Gestures:");
      log("1 = Rock");
      log("2 = Paper");
      log("3 = Scissors");
      userChoice = prompt(`Please choose one of the following Gestures:
1 = Rock
2 = Paper
3 = Scissors`);
      userChoice = convertUserChoiceToNumber(userChoice);
      if (userChoice === undefined) {
        log("Unknown Choice, please try again!");
      } else {
        repeat = false;
      }
    }
    return userChoice;
  }

  // create function playRound
  function playRound(humanCoice, computerChoice) {
    calculateWinner(humanCoice, computerChoice);
  }

  // _________________________________________________________________________________________________
  // create Game loop
  function gameLoop() {
    let repeat = true;
    while (repeat) {
      playRound(getHumanChoice(), getComputerChoice());
      let continueGame;

      log(" ");
      log("The current score is:");
      log("Human vs Computer");
      log(`  ${humanScore}     ${computerScore}`);

      if (humanScore === targetScore) {
        log("");
        log("Congratulations, You won the game!");

        //ask user if he wants to play another game
        continueGame = confirm("Do you want to play again?");
        if (!continueGame) {
          repeat = false;
        }

        // reset score
        computerScore = 0;
        humanScore = 0;
      } else if (computerScore === targetScore) {
        log(" ");
        log("The computer won the game. Nice try.");

        //ask user if he wants to play another game
        continueGame = confirm("Do you want to play again?");
        if (!continueGame) {
          repeat = false;
        }

        // reset score
        computerScore = 0;
        humanScore = 0;
      }
    }
  }

  gameLoop();
});

const ttt = 3;
