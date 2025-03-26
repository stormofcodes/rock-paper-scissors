

//Write function return 'rock,paper,scissors'


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
                        }
}


function getHumanChoice(userChoice) {
    switch(userChoice) {
        case "rock":
            return "You chose rock!";
        case "paper":
            return "You chose paper!";
        case "scissors":
            return "You chose scissors!";
        default:
            return "Invalid choice! Please choose rock, paper, or scissors.";
    }
}




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


// Funktion för att spela spelet
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let userChoice = window.prompt('Rock, Paper or Scissors?').toLowerCase(); // Hämta spelarens val
        console.log(getHumanChoice(userChoice)); // Skriv ut spelarens val i konsolen

        let computerChoice = getComputerChoice(); // Datorns val
        console.log("Computer chose: " + computerChoice); // Skriv ut datorns val i konsolen

        // Spela en runda och skriv ut resultatet
        let result = playRound(userChoice, computerChoice);
        alert(result); // Visa resultatet i en prompt

        // Uppdatera poäng
        if (result.includes('win')) {
            humanScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    // Visa slutpoängen efter 5 rundor
    if (humanScore > computerScore) {
        alert('You win! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    } else if (humanScore < computerScore) {
        alert('You lose! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    } else {
        alert('It\'s a tie! Final score - You: ' + humanScore + ' Computer: ' + computerScore);
    }
}

// Starta spelet
playGame();
 