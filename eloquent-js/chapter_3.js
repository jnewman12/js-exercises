//Chapter 3
// Functions

var square = function(x) {
  return x * x;
};

console.log(square(12));

// a function is created by an expression that starts with the keyword function. Functions have a set of parameters and a body, which contains the statements that are to be executed when the function is called. 
// Function body's are always wrapped in braces. 

// functions can have multiple parameters or none at all.
var makeNoise = function() {
	console.log('Pling!');
};

var power = function(base, exponent) {
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result;
};
console.log(power(10, 25));

// some functions produce a valye, and some don't. A return statement determines the value the function returns.

// Parameters and Scope
// parameters to a regular function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself.
// variables defined within functions are only limited to the scope of that function (local variables). variables defined outside of the local scope, are called global functions. 

var x = 'outside';
var f1 = function() {
	var x = 'inside f1';
};
f1();
console.log(x);

var f2 = function() {
	x = 'inside f2';
};
f2();
console.log(x);

// Nested Scope
// In Javascript, functions are the only things that create a new scope. You can use free standing blocks
var something = 1;
{
	var something2 = 2;
	// do stuff
}
// outside block
// normally this is only useful when doing if/else 

// Functions as Values
// Function variables usually act as names for a spefiic piece of the program. These are defined once and never changed. 
// A function value can do all the things that other values can do;
  // - use in arbitrary expressions, not just call it
  // - it is possible to store a function value ina  new place, pass it as an argument to a function and so on..
var launchMissles = function(value) {
	missleSystem.launch('now');
};
if (safeMode)
  launchMissles = function(value) {/* stuff */};


// there are shorter ways to declare functions
function square(x) {
	return x * x;
}
// this is a function declaration. The statement defines the variable square and points it at the given function. 
// BUT!!
console.log('The future says:', future());
function future() {
	return "We STILL have no flying cars.";
}
// This works because function declarations are not part of the regular top-bottom flow control.


// a 'program' that makes a few function calls
function greet(who) {
	console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye');
// process;
  // - the call to greet causes control to jum to the start of that function
  // - it calls console.log, which then returns control to 'who'
  // - then, it reaches the end of the greet function, so it returns to the place that called it
// the place where the computer stores this context is the call stack
// every time a function is called, the current context is put on top of the stack














