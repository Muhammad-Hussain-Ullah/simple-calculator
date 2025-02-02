#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your First number:", type: "number", name: "FirstNumber" },
  { message: "Enter your second number:", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform action:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(`Your Value is ${answer.FirstNumber + answer.SecondNumber}`);
} else if (answer.operator === "Subtraction") {
  console.log(`Your Value is ${answer.FirstNumber - answer.SecondNumber}`);
} else if (answer.operator === "Multiplication") {
  console.log(`Your Value is ${answer.FirstNumber * answer.SecondNumber}`);
} else if (answer.operator === "Division") {
  console.log(`Your Value is ${answer.FirstNumber / answer.SecondNumber}`);
} else console.log("Please select valid operator");
