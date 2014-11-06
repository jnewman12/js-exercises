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


// Optional Arguments
// js is very broad about the number of arguments you can pass to a function
// if you pass too many, extra ones are ignored. If you pass too few, the missing parameters get assigned undefined
// downside == passing wrong number of arguments and not knowing about it

// this can be called with either 2 arguments, or a single argument to behave like a square
function power() {
	if (exponent == undefined)
		exponent = 2;
	var result = 1;
	for (var count = 0; count < exponent; count++)
		result *= base;
	return result
}
console.log(power(4));
console.log (power(4,3));


// Closure
// what happens to local variables when the function call that created them is no longer active?
// this creates a local variable, then returns a function that accesses and returns this local variable
function wrapValue(n) {
	var localVariable = n;
	return function() { return localVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// a function that calls itself is called recursive

function power(base, exponent) {
	if (exponent == 0)
		return 1;
	else
		return base * power(base, exponent - 1);
}
console.log(power(2, 3));


// a puzzle
// by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produce that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
function findSolution(target) {
	function find(start, history) {
		if (start == target) 
			return history;
		else if (start > target)
			return null;
		else
			return find(start + 5, '(' + history + ' + 5)') ||
		           find(start * 3, '(' + history + ' * 3)');
	}
	return find(1, '1');
}
console.log(findSolution(24));

// the inner function find does the recursing. It takes 2 arguments - the current number and a string that records how we reached this number - and returns either a string that shows how to get to the target or null
// the function performs 3 actions
  // - if the current number is the target number, the current history is a way to reach that target, so it is simply returned. 
  // - if the current number is greater than the target
  // - if it's still below the target, the function tries both possible paths that start from the current number, by calling itself twice.

// we want a program that prints 2 numbers; the number of cows and chickens
// and 0's padded before so it will be 3 digits long
function printFarmInventory(cows, chickens) {
	var cowString = String(cows);
	while (cowString.length < 3)
		cowString = "0" + cowString;
	console.log(cowString + " Cows");
	var chickenString = String(chickens);
	while (chickenString.length < 3)
		chickenString = "0" + chickenString;
	console.log(chickenString + ' Chickens');
}  
printFarmInventory(7, 11);

// refactored for more options
function printZeroPaddedWithLabel(number, label) {
	var numberString = String(number);
	while (numberString.length < 3)
		numberString = "0" + numberString;
	console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickes, pigs) {
	printZeroPaddedWithLabel(cows, 'Cows');
	printZeroPaddedWithLabel(chickens, 'Chickens');
	printZeroPaddedWithLabel(pigs, 'Pigs');
}

printFarmInventory(7, 11, 3);

// pick out a single concept
function zeroPad(number, width) {
	var string = String(number);
	while (string.length < width)
		string = "0" + string;
	return string;
}
function printFarmInventory(cows, chickens, pigs) {
	console.log(zeroPad(cows, 3) + " Cows");
	console.log(zeroPad(chickens, 3) + " Chickens");
	console.log(zeroPad(pigs, 3) + " Pigs");
}
printFarmInventory(7, 16, 3);

// a key aspect in functions is understanding local scopes
// parameters and variables declared inside a function are local to the function, re-created everytime a function is called


// Exercises
