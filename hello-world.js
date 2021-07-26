// This is our first javascript comment
const readline = require("readline");

//  here is some text for fun
// console.log("Hello World");

const firstName = "Clint"
let age = 35;

// console.log(firstName,age);

// age = 34;

// console.log(age);

const isCool = true

let whatImEatingForLunch = "sandwhich"

// console.log(firstName, age, isCool, whatImEatingForLunch);

let aVar = null;

// console.log(age + aVar);

let x = 4
let y = 10
let z = 7 + 8

let sum = x + y + z
// console.log(sum);

let str = "StringOne"
let str2 = 'StringTwo'
let str3 = `StringThree`

let combinedStrings = str + ", " + str2

// console.log(combinedStrings); 

let templateLiterals = `hello, ${firstName}`
// console.log(templateLiterals)

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("Do you like cats y/n?", function(answer) {
  if(answer === 'y') {
      console.log("that's fine I guess"
      )
  } else {
      console.log("We'll get along fine")
  }
});