// Chapter 4
// Data Structures: Objects & Arrays

// objects allows to group values (including other objects) together

// in js, accessing properties (arrays or hashes) can be done by 
// value.x and value['x'] but they are different
// when using a dot, the part after the dot must be a valid variable name and it directly becomes the property
// when using square brackets, the expression between the brackets is evalutated to get the property name.
// value.x fetches the property of value named x
// value['x'] trues to evaluate the expression x and uses the result as property name

// some fun with arrays
var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

// one way to create an object is curly braces 
var day1 = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza', 'running', 'television']
};

var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
// the binary in operator, when applied to a string or object, returns a boolean value that indicates whether that object has that property. 
// Arrays, are just a kind of object specialized for storing sequences of things


// Mutability
//numbers, booleans, strings are all immutable (you cannot change and existing value of those types)
// objects value can be modified by changing its properties
// comparing different objects will return false, even if they are identical

var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
	journal.push({
		events: events,
		squirrel: didITurnIntoASquirrel
	});
}

addEntry(['work', 'touched tree', 'pizza', 'running'], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


// correlation is a measure of dependence between variables. 

// Computing Correlation          
// loop over all journal entries and tally up how many times the event occurs in relation to squirrel transformations
function hasEvent(event, entry) {
	return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
	var table = [0, 0, 0, 0];
	for (var i = 0; i < journal.length; i++) {
		var entry = journal[i], index = 0;
		if (hasEvent(event, entry)) index += 1;
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table;
}

console.log(tableFor('pizza', JOURNAL));
// -> [76, 9, 4, 1]

// Objects as Maps
// instead of storing this data as an array, objects are a better way. 
// using sqaure bracket access notation to create and read the properties and can use the in operator to test whether a given property exists

var map = {};
function storePhi(event, phi) {
	map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);
console.log('pizza' in map);
console.log(map['touched tree']);
// 0.081

// a map is a way to go from values in one domain to corresponding values in another domain

// what if we want to final all events for which we have stored in a coefficient?
// using a for loop isnt going to work because properties dont form a predictable series
// this is a loop for going over properties of an object
for (var event in map) {
	console.log("The correlation for ' " + event + " 'is " map[event]);
}
// correlation for pizza is 0.069
// correlation for touched tree is 0.081

function gatherCorrelations(journal) {
	var phis = {};
	for (var entry = 0; entry < journal.length; entry ++) {
		var events = journal[entry].events;
		for (var i = 0; i < events.length; i++) {
			var event = events[i];
			if(!(event in phis))
				phis[event] = phi(tableFor(event, journal));
		}
	}
	return phis;
}
var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);


// array methods for adding and removing things at the start of an array are called unshift, and shift
var todoList = [];
function rememberTo(task) {
	todoList.push(task);
}
function whatIsNext() {
	return todoList.shift();
}
function urgentlyRememberTo(task) {
	todoList.unshift(task);
}
// the program manages tasks. You add tasks to the end of the list by calling rememberTo('eat')
// when you're ready to do something, you call whatIsNext() to get and remove the front item from the list.
// the urgentlyRememberTo adds a task but adds it to the front instead of to the back

// indexOf has a sibling called lastIndexOf which starts searching for the given element at the end of the array instead of the front
console.log([1, 2, 3, 4, 5].indexOf(2));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

function remove(array, index) {
	return array.slice(0, index)
	.concat(array.slice(index + 1));
}
console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));

// values of type string, number and boolean are not objects. They are immutable and cannot be changed

// javascript does not warn you about defining a variable name that is already taken
// Math Stuff
function randomPointOnCircle(radius) {
	var angle = Math.random()
 * 2 * Math.PI;
 return { x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));

// the global scope can also be approached as an object in Javascript
// in browsers, the global scope object is stored in the window variable
var myVar = 10;
console.log('myVar' in window);
// true
console.log(window.myVar);
// 10

// Exercises

// 1. Sum of a range
/*Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.*/
function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++)
    total += arr[i];
  return total;
}

/* I did not know how to do the range function, this is his example*/
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

// 2. Reversing an Array

// 3. A list

// 4. Deep Comparison







