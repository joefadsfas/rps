
let choices = [
    'rock',
    'paper',
    'scissors'
]


//Display the running score, and announce a winner of the game once one player reaches 5 points. `
// create 2 divs, 1 displaying points of computer, 1 displaying points of player `
// both players start at 0 points, for every win, add a point to the winner `
// update scoreboard
// if one player gets 5 points, display WINNER: player_name 



function playRound(playerSelection, computerSelection) {
    initSelection = playerSelection.toLowerCase()

    let scorePlayer = 0;
    let scoreBot = 0;
    
    const playerScore = document.querySelector('#playerPoints');
    const computerScore = document.querySelector('#computerPoints')

    if (initSelection === computerSelection) {
        scoreBot += 1
        computerScore.textContent = `Machine: ${scoreBot}`
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

