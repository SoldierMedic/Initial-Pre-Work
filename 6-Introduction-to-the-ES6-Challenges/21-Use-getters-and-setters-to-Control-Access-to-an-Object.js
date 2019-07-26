// this lesson instructed me to create getters and setters for a class in ES6.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(temperature){
      this._temperature;
    }
    get temperature(){
      return this._temperature
    }
    set temperature(setTemp){
      this._temperature =  setTemp;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
