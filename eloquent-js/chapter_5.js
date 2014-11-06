// Chapter 5 Higher Order Functions
// function that goes over an array and calls console.log on every element

function logEach(array) {
	for (var i = 0; i < array.length; i++)
		console.log(array[i]);
}
// but what if we want to do something other than logging elements
function forEach(array, action) {
	for (var i = 0; i < array.length; i++)
		action(array[i]);
}
forEach(['something', 'some', 'thing'], console.log);

// you dont pass a predefined function to forEach but create a function on the spot instead
var numbers = [1, 2, 3, 4, 5, 6], sum = 0;
forEach(numbers, function(number) {
	sum += number;
});

// functions that operate on other functions (by taking them as arguments or by returning them) are called higher level functions
// the term comes from math (again!) where the distinction between functions and other values are taken more seriously

// higher order functions allow us to abstract over actions, not just values

// functions that create other functions
function greaterThan(n) {
	return function(m) { return m > n; };
}
var greaterThan10 = greaterThan10(10);
console.log(greaterThan10(11));

// functions that change other functions
function noisy(f) {
	return function(arg) {
		console.log('calling with', arg);
		var val = f(arg);
		console.log('called with', arg, " - got", val)
		return val
	};
}
noisy(Boolean)(0);

// comments are not allowed in JSON :(


// js gives us function JSON.stringify and JSON.parse that convert data
var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);

// who was young in 1924?
function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}
console.log(filter(ancestry, function(person) {
	return person.born > 1900 && person.born < 1925;
}));

// the map method transforms an array by applying a function to all of its elements and building a new array from the returned values
function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped
}
var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));






