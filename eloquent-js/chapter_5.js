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

// finding the person with the earliest year of birth without higher order functions
var min = ancestry[0];
for (var i = 1; i < ancestry.length; i++) {
	var cur = ancestry[i];
	if (cur.born < min.born)
		min = cur;
}
console.log(min);

// higher order functions shine when you need to compose functions

// find average age for men and women in the data set
function average(array) {
	function plus(a, b) { return a + b;}
	return array.reduce(plus) / array.length;
}
function age (p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }
console.log(average(ancestry.filter(male).map(age)));

var byName = {};
ancestry.forEach(function(person) {
	byName[person.name] = person;
});
console.log(byName['weird name']);


function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}
// condenses a value from the family tree

// this code would find the percentage of know ancestors for a given person who lived past 70
function countAncestors(person, test) {
  function combine(person, fromMother, fromFather) {
    var thisOneCounts = test(person);
    return fromMother + fromFather + (thisOneCounts ? 1 : 0);
  }
  return reduceAncestors(person, combine, 0);
}
function longLivingPercentage(person) {
  var all = countAncestors(person, function(person) {
    return true;
  });
  var longLiving = countAncestors(person, function(person) {
    return (person.died - person.born) >= 70;
  });
  return longLiving / all;
}


// Binding
// the bind method, which all functions have, creates a new function that will call the original function but with some of the arguments already fixed
// this shows bind in use

var theSet = ["Carel Haverbeke", "Maria van Brussel",
              "Donald Duck"];
function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));

// arrays provide a number of useful higher order function
// forEach to do something with each element in an array
// filter to build a new array with some elements filtered out
// map to build a new array where each element has been put through a function 
// and reduce to combine al an arrays elemenmts to a single value

// functions have an apply method that can be used to call them with an array specifying their arguments
// they also have a bind method which is used to create a partially applied version of the function

// Exercises

// 1. Flattening

// 2. Mother - Child Age Difference

// 3. Historical Life Expectancy

// 4. Every and Then Some





