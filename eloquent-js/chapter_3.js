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




