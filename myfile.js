// This is our first javascript comment

//  here is some text for fun
console.log("Hello World");

let message = "Hello again, world";
console.log(message);


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Howdy, what's your name?", function(answer) {
  console.log("Hi " + answer);
});
