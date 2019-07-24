  // in this lesson they showed me how when a function needs to return a variable that is defined both globally and locally, the function will return the local if it was declared within said function
  // Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
