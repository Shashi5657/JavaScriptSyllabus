/*
let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
function randomItem() {
    let i = Math.floor(Math.random() * 3) 
    return i
}

console.log(hands[randomItem()])
*/

let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}

console.log(getHand());