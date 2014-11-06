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





