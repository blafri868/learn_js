function getInput(question) {
  let rlSync = require('readline-sync');
  return rlSync.question(question);
}

let firstName = getInput('What is your first name? ');
let lastName = getInput('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);
