//Function that returns 3 randomized choices from computer and changes from num to str
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
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


//Plays one round and alerts live results
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
                  return 'You win! Rock beats scissors!';
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                  return 'You win! Paper beats Rock!';
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                   return 'You win! Scissors beats paper!';
        } else {
                   return 'You lose! ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + ' beats ' + humanChoice + '!';
                }           
        }


//Gets users input in prompt, computers choice. Writes it out in the console, plays 5 rounds and alerts final result
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let userChoice = window.prompt('Rock, Paper or Scissors?').toLowerCase(); 
        console.log('You chose: ' + userChoice); 

        let computerChoice = getComputerChoice(); 
        console.log('Computer chose: ' + computerChoice); 

        
        let result = playRound(userChoice, computerChoice);
        alert(result); 

        
    if (result.includes('win')) {
            humanScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        alert('You win! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
        } else if (humanScore < computerScore) {
        alert('You lose! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
        } else {
        alert('It\'s a tie! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    }
}

// Starts the game 
playGame();
 