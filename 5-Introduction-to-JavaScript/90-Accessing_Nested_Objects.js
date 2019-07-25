// in this lesson that wanted us to access an objects property that happened to be nested in many other properties. This lesson taught me how to treat propertyies with a space in their name
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside['glove box']; // Change this line
