let foo = 'bar';
{
  let foo = 'qux';
}

/*
 * the console.log statment below will output bar. This is because the second
 * time you declared foo it created a new variable scoped only to that block and
 * did not over ride the value of the first foo.
*/
console.log(foo);