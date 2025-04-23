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
    
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    const resultDisplay = document.querySelector(".result");
    const scoreDisplay = document.querySelector(".score");
    const buttons = document.querySelectorAll(".choice");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (gameOver) return;

        let userChoice = button.value;
        resultDisplay.textContent = 'You chose: ' + userChoice; 

        let computerChoice = getComputerChoice(); 
        resultDisplay.textContent = 'Computer chose: ' + computerChoice; 

        
        const result = playRound(userChoice, computerChoice);
        resultDisplay.textContent = result;
        
        
        if (result.includes('win')) {
            humanScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }

        scoreDisplay.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    
        if (humanScore === 5 || computerScore === 5) {
            gameOver = true;
        if (humanScore > computerScore) {
        resultDisplay.textContent = 'You won the game!';
        } else if (humanScore < computerScore) {
        resultDisplay.textContent = 'You lost the game!';
        } else {
        resultDisplay.textContent = 'It\'s a tie!';
        }
        }
    });
});

