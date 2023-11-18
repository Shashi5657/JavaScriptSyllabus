/*

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1; count <= 10; count+= 1) {
    console.log(count)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for ( let count = 10; count <= 100; count+= 10) {
    console.log(count)
}



let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
];

for (i = 0; i < messages.length; i++) {
    console.log(messages[i])
}



let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for ( let i = 0; i < cards.length; i++ ) {
    console.log(cards[i])
}

*/

let sentence = ["Hello ", "my ", "name ", "is ", "Shashi"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent