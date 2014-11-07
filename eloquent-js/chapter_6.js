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











