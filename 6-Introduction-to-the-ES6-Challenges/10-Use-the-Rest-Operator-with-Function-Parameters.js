/* this lesson was a struggle. The instructions were very unclear therefore I used outside sources to better understand.
As far as I can understand the rest operator will allow you to take in any amount of parameters and will collapse them into one array.
Sources:
https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6
https://www.freecodecamp.org/forum/t/solved-cant-pass-test-on-the-rest-operator-es6/195067
*/
function sum(...args){
  return args.reduce((a, b) => a + b, 0);
}
