// in this lesson I learned abouut the radix arguement that can be passed ion to the parseInt function. It allows you to declare the base of the number we are parsing from the string.
function convertToInteger(str) {
  return parseInt(str, 2)
}

convertToInteger("10011");
