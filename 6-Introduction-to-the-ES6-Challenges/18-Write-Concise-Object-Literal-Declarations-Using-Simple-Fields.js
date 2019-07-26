// this lesson taught me how to define object literals with the use of new features in ES6
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {name, age, gender};
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
