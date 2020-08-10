let rlSync = require('readline-sync');
const YEARS_IN_FUTURE = [10, 20, 30, 40];
let age = Number(rlSync.question('How old are you? '));

for (let x = 0; x < YEARS_IN_FUTURE.length; x++) {
  let futureAge = age + YEARS_IN_FUTURE[x];
  console.log(`In ${YEARS_IN_FUTURE[x]} years you will be ${futureAge}`);
}
