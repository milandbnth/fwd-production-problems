/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value (5) for x. You must still use
  `x` as the variable inside the function, however.
*/

/*x = 5;

var newFunc = function double(num) {
 var x = num * 2;
  return x;
} 

double(6);
console.log('The value of x is', x, '-- it should be 5.'); */

/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).

  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/
/*x = 5;

var newFunc = {
  double: function double(num) {
 var x = num * 2;
  return x;
} };


console.log(newFunc.double(5));*/

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/

x = 5;

var newFunc = {
  double: function double(num) {
    if (isNaN(num))
      console.log("You have entered: " + num + " which is not a number");
    var x = num * 2;
  return x;
} };

console.log(newFunc.double("blah blah"));