function computerSelection() {
    const ran = Math.floor(Math.random() * 3);
    let result;
    /* 0 = Rock, 1 = Paper, 2 = Scissors */
    if (ran == 0) {
        result = "Rock";
    } else if (ran == 1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    
    console.log(result);
    return result;
}

function playerSelection() {
    const userInput = window.prompt("Rock, Paper or Scissors?").charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    console.log(userInput);
    return userInput;
}

function playRound(playerSelection, computerSelection) {
    const comp = computerSelection;
    const user = playerSelection;

    if ((comp == 'Rock' && user == 'Scissors') || (comp == 'Paper' && user == 'Rock') || (comp == 'Scissors' && user == 'Paper') ) {
        console.log("You Lose! " + comp + " beats " + user);
    } else if (comp == user) {
        console.log("Unentschieden!");
    } else {
        console.log("You Lose! " + comp + " beats " + user);;        
    }
}

playRound();