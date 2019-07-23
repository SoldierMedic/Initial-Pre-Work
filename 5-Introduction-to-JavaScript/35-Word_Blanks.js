// in this lesson they made us create a sentence by using the words passed into the function.
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result += "The " + myAdjective+ " " + myNoun + " "+ myVerb +" "+ "very " + myAdverb + ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
