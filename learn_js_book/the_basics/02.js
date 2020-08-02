const number = 493664830985637;
const digits = Array.from(String(number));
let digitPlace = '1';

while (digits.length) {
  console.log(`Digit at ${digitPlace}'s: ${digits.pop()}`);
  digitPlace = digitPlace + '0';
}
