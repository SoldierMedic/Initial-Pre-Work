// in this lesson I was instructed to create a function that would check to see if an object has certain properties.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
if (myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
}
else{
  return "Not Found";
}
}

// Test your code by modifying these values
checkObj("gift");
