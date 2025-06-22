document.addEventListener("DOMContentLoaded", function(){
    let log = console.log;

    // ___________________________________________________________________________________________________________________________________________
    // Helper Functions
    // ___________________________________________________________________________________________________________________________________________
    // create function to convert the users Chice to a number (1 = Rock, 2 = Paper, 3 = Scissors)
    function convertUserChoiceToNumber(userChoice) {
        userChoice = userChoice.toLowerCase();
        switch(userChoice) {
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
        };
    };

    // create function to convert the number- Value of the chosen hand into a human readable one.
    function returnHand(hand) {
        switch(hand) {
            case (1):
                return "Rock";
            case (2):
                return "Paper";
            case (3):
                return "Scissors";
            default:
                return undefined;
        };
    };

    // create function to calculate the outcome of the game
    function calculateWinner(humanHand, computerHand) {
        switch (humanHand - computerHand) {
            case (-2):
            case (-1):
                humanScore ++;
                log("");
                log(`Computer chose: ${returnHand(computerHand)}`);
                log(`You chose: ${returnHand(humanHand)}`);
                log("Congrratulations, you Won the match.");

            case(0):
                log("");
                log(`Computer chose: ${returnHand(computerHand)}`);
                log(`You chose: ${returnHand(humanHand)}`);
                log("You drawed with the computer. Try again.");

            case(1):
            case(2):
                computerScore ++;
                log("");
                log(`Computer chose: ${returnHand(computerHand)}`);
                log(`You chose: ${returnHand(humanHand)}`);
                log("The computer won the match. Better luck next time!");
        }; 
    };

    // ___________________________________________________________________________________________________________________________________________
    // create function getComputerChoice
    function getComputerChoice () {
        // get random number
        let random = Math.floor( Math.random() * 100) ;
        // log(random);
        // devide into thirds and assign every third one of the possible hands
        if (random <= 33) {
            return 1; //Rock
        }else if (random <= 66) {
            return 2; // Paper
        }else {
            return 3; //Scissors
        };
    };


    // ___________________________________________________________________________________________________________________________________________
    // create function getHumanChoice
    function getHumanChoice() {
        let repeat = true;
        let userChoice;
        while (repeat){
            log("Plase choose one of the following Gestures:");
            log("1 = Rock");
            log("2 = Paper");
            log("3 = Scissors");
            userChoice = prompt( `Please choose one of the following Gestures:
1 = Rock
2 = Paper
3 = Scissors`);
            userChoice = convertUserChoiceToNumber(userChoice);
            if (userChoice === undefined){
                log("Unknown Choice, please try again!");
            }else{
                repeat = false;
            }
        };
        return userChoice;
    };



    // ___________________________________________________________________________________________________________________________________________
    // declare humanScore and computerScore
    let humanScore = 0;
    let computerScore = 0;


    // ___________________________________________________________________________________________________________________________________________
    // create function playRound
    function playRound(humanCoice, computerChoice) {
        calculateWinner(humanCoice, computerChoice);
    };

    playRound(getHumanChoice(), getComputerChoice());

});
