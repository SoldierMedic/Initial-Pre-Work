// this lesson of freeCodeCamp had me think about a couple of previous lessons where we push and shifted indexes of arrays. We had to create a function that would shift take a value and place it at the end of the array while also removing and returning the value at index 0.
function nextInLine(arr, item) {
  // Your code here
    arr.push(item);
    var removed = arr.shift();
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log("Removed: " + nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
