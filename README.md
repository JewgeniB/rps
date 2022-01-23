#rps
Odin Project: Rock Paper Scissors


Erste Lösung:
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

function playerSelection(input) {
    const userInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

    console.log(userInput);
    return userInput;
}

function playRound() {
    const comp = computerSelection();
    const user = playerSelection(window.prompt("Rock, Paper or Scissors"));

    if ((comp == 'Rock' && user == 'Scissors') || (comp == 'Paper' && user == 'Rock') || (comp == 'Scissors' && user == 'Paper') ) {
        console.log("You Lose! " + comp + " beats " + user);
    } else if (comp == user) {
        console.log("Unentschieden!");
    } else {
        console.log("You Lose! " + comp + " beats " + user);;        
    }
}

playRound();