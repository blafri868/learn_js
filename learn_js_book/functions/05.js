/*
 * this code logs nothing to the console because the console.log statment is
 * un-reachable due to the fact return is above it.
*/
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');