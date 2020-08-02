/*
 * This code will log '510' to the console instead of 15 because of implicit
 * conversion. the + in javascript can be used for addition but also for
 * concatenation. If you use the + operator and one of the two expressions is a
 * string the javascript interpreter will implicitly coerse the remaining
 * expressions to strings.
*/
console.log('5' + 10);
