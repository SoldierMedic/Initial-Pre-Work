// in this lesson I learned that in ES6 there is a keyword called let that is used in place of the var keyword that will not allow the user to create multiple variables of the same name.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
