// in this lesson I learned how to stop JS from using the Type Coercsion by using the strict equality operator.
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
