// SETTING THE STAGE
let player = "Per"; // const
let opponent = "Nick"; // const
let game = "AmazingFighter"; // const
const points = 0; // let
const hasWon = false; // let 

// PLAYING THE GAME
points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if (hasWon) {
  console.log(
    player + " got " + points + " points and won the " + game + " game!"
  );
  // doing some template string practice
  // ` ${player} got ${points} points and won the ${game} game! `
} else {
  console.log("The winner is " + opponent + "! " + player + " lost the game");
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
