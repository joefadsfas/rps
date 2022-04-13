
let choices = [
    'rock',
    'paper',
    'scissors'
]




let scorePlayer = 0;
let scoreBot = 0;

function playRound(playerSelection, computerSelection) {
    initSelection = playerSelection.toLowerCase()

    
    const playerScore = document.querySelector('#playerPoints');
    const computerScore = document.querySelector('#computerPoints')

    while(scorePlayer < 5 && scoreBot < 5) {
        console.log(scorePlayer);
        console.log(scoreBot);
        if (initSelection === computerSelection) {
            return `It's a draw, you both picked ${initSelection}`
            
        }
    
        else if (initSelection === 'rock' && computerSelection === 'paper') {
            scoreBot += 1
            computerScore.textContent = `Machine: ${scoreBot}`
            return "You Lose! Paper beats Rock"
        }
    
        else if (initSelection === 'paper' && computerSelection === 'scissors') {
            scoreBot += 1
            computerScore.textContent = `Machine: ${scoreBot}`
            return "You Lose! Scissors beat paper"
        }
    
        else if (initSelection === 'scissors' && computerSelection === 'rock') {
            scoreBot += 1
            computerScore.textContent = `Machine: ${scoreBot}`
            return "You Lose! Rock beats scissors"
        }
    
        else {
            scorePlayer += 1
            playerScore.textContent = `Player: ${scorePlayer}`
            return "You won!"
        }
    }
    if (scorePlayer === 5) {
        return "YOU WOOOOOON!"
    }
    else {
        return "womp womp womp"
    }
}


function game() {
    const results = document.querySelector('#results');

    

    const scis = document.querySelector('#scis');
    scis.addEventListener('click', () => {
        let playerSelection = 'scissors';
        let choice = choices[Math.floor(Math.random() * choices.length)];
        results.textContent = playRound(playerSelection, choice)
    });
        
    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        let playerSelection = 'paper';
        let choice = choices[Math.floor(Math.random() * choices.length)];
        results.textContent = playRound(playerSelection, choice)
    });
        
    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        let playerSelection = 'rock';
        let choice = choices[Math.floor(Math.random() * choices.length)];
        results.textContent = playRound(playerSelection, choice)
    });       

}


game()

