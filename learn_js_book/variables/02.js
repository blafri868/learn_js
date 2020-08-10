let age = 35;
let yearsInFuture = [10, 20, 30, 40];

for (let x = 0; x < yearsInFuture.length; x++) {
  let futureAge = age + yearsInFuture[x];
  console.log(`In ${yearsInFuture[x]} years you will be ${futureAge}`);
}
