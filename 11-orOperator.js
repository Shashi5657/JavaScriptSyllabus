// let hasCompletedCourse = true;
// let givesCertificate = true;

// if (hasCompletedCourse === true || givesCertificate === false) {
//   generateCertificate();
// }

// function generateCertificate() {
//   console.log("Generating certificate....");
// }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
let likesDocumentaries = true;
let likesStartups = false;

if(likesDocumentaries === true || likesStartups === false) {
    recommendMovie()
}
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
