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
        /*Computer Win*/
        console.log("You Lose! " + comp + " beats " + user);
        return 2;
    } else if (comp == user) {
        /*Tie*/
        console.log("Unentschieden!");
        return 0;
    } else {
        /*User Win*/
        console.log("You Win! " + user + " beats " + comp);
        return 1;  
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0
    let tieGames = 0;
    let rounds = (window.prompt("How many rounds do you want to play?"));

    while (rounds < 1) {
        rounds = (window.prompt("How many rounds do you want to play?"));
    }

    for (let i = 0; i <= rounds-1; i++) {
        let result = playRound();
        if (result == 1) {
            playerScore++;
        } else if (result == 2) {
            computerScore++;
        } else {
            tieGames++;
        }
    }

    if (computerScore > playerScore) {
        alert("You lost the game!")
    } else if (computerScore < playerScore) {
        alert("You won the game!")
    } else {
        alert("The game is tied!")
    }

    console.log(playerScore);
    console.log(computerScore);
    console.log(tieGames);
}

game();