const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
// console.log(newStr);
let newStr2 = str.slice(3,6);
// console.log(newStr2);
newStr3 = str.substring(6,10);
finalString = newStr2 + newStr3 + newStr
console.log(finalString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original variable is ${str} and our new variable is called ${finalString}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const input = require('readline-sync');

function askForAnswer() {

     let numberOfLetters = input.question("Enter number of letters to be relocated: ");
}

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
function gradeQuiz(candidateAnswer){
    let correctAnswer = 3
}
if (candidateAnswer === correctAnswer) {
    console.log(`Correct!!`);
} else {
    console.log(`Sorry, the correct answer was ${correctAnswer}. Please try again!!`);
}