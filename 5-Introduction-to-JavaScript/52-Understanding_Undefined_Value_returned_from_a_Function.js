// in this lesson of freeCodeCamp I learned how JS return statements will always return an undefined value unless told otherwise.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum +=5;
}


// Only change code above this line
var returnedValue = addFive(addThree()); // In the lesson they asked us to make sum equal to 8 but never had us invoke the addThree function so I wanted to see if this would work and it does. However returnedValue will
                                        // still return undefined until they are changed
console.log(sum);
