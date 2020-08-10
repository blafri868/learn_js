function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let result = 1;

for (let x = 1; x <= 5; x++) {
  result = times(result, x);
}
