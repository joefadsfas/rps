
let choices = [
    'rock',
    'paper',
    'scissors'
]



function computerPlay() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
}



const computer = computerPlay()


function playRound(playerSelection, computerSelection) {
    initSelection = playerSelection.toLowerCase()
    if (initSelection === computerSelection) {
        return "It's a draw"
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
    for (let i = 0; i < 5; i++) {
        let selection = prompt("Pick between rock paper and scissors: ")
        console.log(playRound(selection, computer))
    }

}


game()
