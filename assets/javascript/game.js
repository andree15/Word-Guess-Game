let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
let wins = 0;
let losses = 0;
let guesses = 10;

let computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

let reset = function (){
    computerChoice();
    //I cannot figure out how to call the function again after I guess the letter right
}

console.log(computerChoice)
document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
        guesses = 10
        reset
    }

    else {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guesses = 10;
    }


    console.log(wins)
    console.log(losses)
    console.log(guesses)
    

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
}