
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

    if (initSelection === computerSelection) {
        return `It's a draw, you both picked ${initSelection}`
        
    }

    else if (initSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock"
    }

    else if (initSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beat paper"
    }

    else if (initSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats scissors"
    }

    else {
        return "You won!"
    }
}


function game() {
    const results = document.querySelector('#results');

    let scorePlayer = 0;
    let scoreBot = 0;
    

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


game(scorePlayer, scoreBot)

