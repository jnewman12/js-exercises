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

// making a row of data
// the first part computes arrays of minimum column widths and row heights for a grid of cells
// the rows variable will hold an array of arrays with each inner array representing a row of cells

function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		}, 0);
	});
}

// using a variable name starting with an underscore is a way to indicate that this argument is not going to be used

// this is how to draw that table
function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}
// the drawTable function uses the helper drawRow to draw all rows
// and then joins them together with newline characters
// the drawRow function itself first converts the cell objects in the row to blocks, which are arrays of strings representing the content of the cells, split by line.
// the second call to map in drawRow build up this output line by line by mapping over the lines in the leftmpst block and for each of those, collecting a line that spansa the full width of the table. These lines are then joined with newline characters to provide the whole row as drawRows return value
// the function drawLine extracts lines that should appear next to each other from an array of blocks and joins them with a space character to create a one character gap between the tables columns


//now, a constructor for the cells that contain text
function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
};
TextCell.prototype.minHeight = function {
	return this.text.length;
};
TextCell.prototype.draw = function(width, heigth) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
// this code uses a helper, repeat, which build a string whose value is the string argument repeated times number of times
// the draw method uses it to add padding to lines os that they all have the required length
// Let's try everything by writing a 5 x 5 checkerboard
var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 54; j++) {
		if ((j + i) % 2 == 0)
			row.push(new TextCell("##"));
		else
			row.push(new TextCell("  "));
	}
	rows.push(row);
}
console.log(drawTable(rows));


// Objects are complicated :(
// they have prototypes, which are other objects, and will acts as if they have properties they dont have as long as the prototype has that property. Simple objects have Object.prototype as their prototype
// Constructors which are functions whose name start with a capital letter, can be used with the new operator to create new objects.
// the new objects prototype will be the object found in the prototype property of the constructor function. You can make good of this by putting the properties that all values of a given type share into their prototype. The instanceOf operator can tell you whether that object is an instance of that constructor

// one useful thing to do with objects is to specify an interface for them and tell everybody they are supposed to talk to your object through that interface. The rest of the details that make up your object are now encapsulated 

// having different objects expose the same interface and then writing code that works on any object with the interface is called polymorphism

// when implementing multiple types that differ in only some details, it can be helpful to simple make the prototype of your new type derive from the prototype of your old type and have your new constructor call the old one. This gives you an object type similar to the old type by for which you can add and override properties.

// Exercises

// 1. 

// 2. 

// 3. 