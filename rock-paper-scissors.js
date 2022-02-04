let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    // Sets rock, paper, scissor choices 
    const choices = ['rock', 'paper','scissors']
    return choices[Math.floor(Math.random() * [choices.length])];
}

function playerPlay() {
    const input = prompt ('Will you play Rock, Paper, or Scissors?');
    const option = input.toLowerCase();

    return option;
}

// Plays a single functional round 
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            return 'YOU WIN! You beat the computers scissors!';
        }
        else if (computerSelection === 'paper') {
            computerScore++;
            return 'YOU LOST to the computers paper!';
        }

    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            return 'YOU WIN! You beat the computers rock!';
        }
        else if (computerSelection === 'scissors') {
            computerScore++;
            return 'YOU LOST to the computers scissors!';
        }

    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            return 'YOU WIN! You beat the computers paper!';
        }
        else if (computerSelection === 'rock') {
            computerScore++;
            return 'YOU LOST to the computers rock!';
        }
    }
}

function game() {
    for (let i = 0; i <= 4; i++) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        // Console announces player selection
        console.log('Player chose: ' + playerSelection);

        // Console announces computer selection
        console.log('Computer chose: ' + computerSelection);

        // Console announces outcome of the game round
        console.log(playRound(playerSelection, computerSelection));

        // Console announces player selection
        console.log('Player score: ' + playerScore);

        // Console announces computer selection
        console.log('Computer score: ' + computerScore);

    }

    console.log('Final Computer Score: ' + computerScore);
    console.log('Final Player Score: ' + playerScore);
}

game();
    
