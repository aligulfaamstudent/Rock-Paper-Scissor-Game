let userChoice;
let computerChoice;

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
        } else {
            console.log("Error!");
        }
    }
const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3)
   switch (randomNumber) {
       case 0:
           return 'rock';
        case 1:
           return 'paper';
        case 2:
           return 'scissors';
   }
};
const determineWinner = () => {
    if (userChoice === computerChoice)
    return 'The game is a tie!'
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The Computer won!';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The Computer won!';
      } else {
        return 'You won!'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The Computer won!';
      } else {
        return 'You won!'
      }
    }
  }
  const playgame = () => {
    userChoice = getUserChoice(prompt('Rock, Paper, Scissors...'));
    computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
 };

 playgame();
