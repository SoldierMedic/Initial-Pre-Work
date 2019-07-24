// in this lesson of freeCodeCamp they taught me how to define a local variable vs a global in JS
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar =10;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
