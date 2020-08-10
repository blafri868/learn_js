{
  let foo = 'bar';
}

/*
 * you get an error stating that foo is undefined. This is becuase let is scoped
 * to the blocked it was declared in and console.log was called outside that
 * block
*/
console.log(foo);
