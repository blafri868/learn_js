/* This function will log 1 to the console.
 * executing the foo function does not change the value of bar because we
 * re-declare bar inside foo so the the bar variable inside foo shadows the
 * global bar variable
*/
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);