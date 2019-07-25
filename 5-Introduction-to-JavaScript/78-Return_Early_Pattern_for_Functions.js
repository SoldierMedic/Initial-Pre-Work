// in this lesson I was instructed to make a function return an undefined value if either parameter passed into it was less then 0.
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a<0 || b<0){
    return;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
