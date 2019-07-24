// in this lesson I learned that the equality operator of JS will use a method called Type Coercion in order to compare two values of different data types.
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
