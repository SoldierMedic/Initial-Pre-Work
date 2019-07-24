// in this lesson we passed an arguement into a function then returned the value. We then set that assigned that value to the proccessed var.
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = processArg(7);

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
