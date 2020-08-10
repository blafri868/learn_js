function getInput(question) {
  let rlSync = require('readline-sync');
  return rlSync.question(question);
}

let multiply = (num1, num2) => num1 * num2;

let num1 = Number(getInput('1st number: '));
let num2 = Number(getInput('2nd number: '));

console.log(multiply(num1, num2));
