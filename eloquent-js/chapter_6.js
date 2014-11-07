// Chapter 6
// Secret Life of Objects

// an object is a hard shell that hides complexity inside it and offers us a few knobs and connectors (methods) that present and interface through which the object is to be used
// objects have encapsulation; which distinguishes between internal complexity and external interface

// methods are simply properties that hold function values
// this is a method
var rabbit = {};
rabbit.speak = function(line) {
	console.log("The rabbit says '" + line " ' ");
};
rabbit.speak("I'm alive");

//usually a method needs to do something with the object it was called on
// when a function is called as a method, looked up as a property and immediately called, as in object.method() the variable THIS in its body will point to the object that is was called on
// this is similar to ruby's self
function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + " ' ");
}
var whiteRabbit = { type: "white", speak: speak};
var fatRabbit = { type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting");
fatRabbit.speak('I could sure use a carrot right now');

// the code above uses the this keyword to output the type of rabbit that is speaking

// almost all objects have a prototype
// a prototype is another object that is used as a fallback source of properties. When an object gets another request for a property that it does not have, its prototype will be searched for the property, the the prototypes prototype...and so on....

// you can use Object.create to create an object with a specific prototype
var protoRabbit = {
	speak: function(line) {
		console.log("The " + this.type + " rabbit says ' " + line + " ' ");
	}
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak('SKREEEEEEK');
// the proto rabbit acts as a container for the properties that are shared by all rabbits.



// Constructors
// a more convenient way to create objects that derive from the shared prototype is to use a contructor
// In js, calling a function with the new keyword in front of it causes it to be treated as a constructor
// the constructor will have the 'this' variable bound to a fresh object

// An object created with new is said to be an instance of its contructor

// here is a constructor for rabbits. It is a convention to capitalize the names of constructors so that they are easily distinguished from other functions
function Rabbit(type) {
	this.type = type;
}
var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit('black');
console.log(blackRabbit.type);
//black

// constructors automatically get a property named prototype, which by default holds a plain, empty object that derives from Object.prototype
// So to add a speak method to rabbits created with the rabbit constructor, we can do this
Rabbit.prototype.speak = function(line) {
	console.log("The " + this.type + " rabbit says ' " + line + " ' ");
};
blackRabbit.speak("Doom...");

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
// small
killerRabbit.teeth = "long, sharp, bloody";
console.log(killerRabbit.teeth);
// long, sharp, bloody
console.log(blackRabbit.teeth);
//small
console.log(Rabbit.prototype.teeth);
// small

// calling toString on an array gives a result similar to calling .join(",")
// it puts commas between the values in an array

// a prototype can be used at any time to add new properties and methods to all objects based on it
Rabbit.prototype.dance = function() {
	console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();

// all properties that we create by assigning them are enumerable

for (var name in map) {
	if (map.hasOwnProperty(name)){
		// some code
	}
}








