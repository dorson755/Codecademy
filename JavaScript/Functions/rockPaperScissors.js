const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Please enter a valid choice.')
  }
}
//console.log(getUserChoice('ROCK'))

function getComputerChoice(){
  let computerNum = Math.floor(Math.random()*3)
  switch (computerNum){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

//console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'The game is a tie.'
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
    if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
    }
      if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
}

function playGame(){
  const userChoice = getUserChoice ('rock');
  console.log('User chose ' + userChoice + '.');

  const computerChoice = getComputerChoice();
  console.log('Computer chose ' + computerChoice +'.');

  console.log(determineWinner(userChoice, computerChoice));
  
}

playGame();