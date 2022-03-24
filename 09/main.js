
let playerOne = +prompt("Player 1 put in a number!")
let playerTwo = 0;
let difference;

for (tries = 0 ; playerTwo !== playerOne && playerOne >= 1 && playerOne <= 99 ; tries++) {
    playerTwo = +prompt("Player 2 guess Player's number");
    if (playerTwo !== playerOne) {
        difference = 1*(playerOne-playerTwo)
        alert("Wrong guess! The difference is " +  difference)
    } else {
        alert("Congratulations! The number was " + playerOne + ". You made " + tries + " guesses.")
    }
}