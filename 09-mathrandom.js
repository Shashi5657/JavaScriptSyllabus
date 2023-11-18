// let randomNumber = Math.random() * 6
/* 
let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);



What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

// let randomNumber = Math.floor(Math.random()*6)

// console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor(Math.random()*6) + 1;
    return randomNumber
}
console.log(rollDice());