// Javascript Objects in Detail



//Javascript has 5 simple data types
// number, string, boolean, undefined, and null
// JS has 1 complex data type; Objects

// simple data types are immutable (cant be changed), objects are mutable (can be changed)

// An object is an unordered list of primitive data types that are stored as name value pairs
// Each item in the list is called a property, functions are called methods, and each property name has to be unique can can be a string or a number. 

// This is a simple object
var myFirstObject = {firstName: 'James', favoriteAuthor: 'Gladwell'};

// think of an object as a list that contains items and each item in the list is stored by a name-value pair 
// in the above example, the property names are firstName and favoriteAuthor, and the values are James and Gladwell

// property names can be a string or a number
// if the property name is a number it has to be accessed with bracket notation

var ageGroup = {30: 'Children', 100: 'Very Old'};
console.log(ageGroup.30) // will throw error
// this is how you would access the value of the property 30, to get the value Children
console.log(ageGroup['30']); // Children
// best to avoid using numbers as property names

// Reference data type and primitive data type
// one of the main differences between Reference data type and primitive data types, is the reference data types value is stored as a reference
// it is not stored directly on the variable, as a value, as the primitive data types are

// primitive data types string stored as a value
var person = 'Kobe';
var anotherPerson = person; // anotherPerson = the value of person 
person = 'Bryant'; // value of person changed
console.log(anotherPerson); // Kobe
console.log(person); // Bryant
// even though person was changed to Bryant, the anotherPerson variable still retains the value person had

// save as reference for Objects (these values are not 'hard-coded')
var person = {name: 'Kobe'};
var anotherPerson = person;
person.name = 'Bryant';
console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant
// in this example, we copied the person object to anotherPerson, but because the value in person was stored as a reference, and not an actual value, when we changed the person.name property to 'Bryant' the anotherPerson reflected the changed because it never stored an actual copy of it's own value of the person properties, it only had reference to it


// Object Data Properties Have Attributes
// each data property (object property that store data) has not only the name-value pair, but also 3 attributes (that are all set to true by default)
  // - configurable attribute; specified whether the property can be deleted or changed
  // - enumerable; specified whether the property can be returned in a for/in loop
  // - writable; specified whether the property can be changed

// Creating Objects

// Objects Literals
// empty object initialized using the object literal notation
var myBooks = {};
// object w/ 4 items, using object literal
var mango = {
	color: 'yellow', 
	shape: 'round', 
	sweetness: 8,

	howSweetAmI: function() {
		console.log('Good');
	}
}

// Object Constructor
// this is creating an object with Object Constructor. A constructor is a function used for initializing new objects, and you use the 'new' keyword to call the constructor
var mango = new Object ();
mango.color = 'yellow';
mango.shape = 'round';
mango.sweetness = 8;

mango.howSweetAmI = function () {
	console.log('Good');
}
// objects can contain any other data type, including Numbers, Arrays, and even other Objects


// If you had an application that displays fruits, all fruits would have properties such as color, shape, sweetness, cost, showname etc
// it would be tedious to type this everytime you want to create a new fruit object
var banana = {
	color: 'yellow', 
	sweetness: 8,
	fruitName: 'Mango',
	nativeToLand: ['South America', 'Central America'],

	showName: function() {
		console.log('This is' + this.fruitName);
	},
	nativeTo: function() {
		this.nativeLand.forEach(function(eachCountry) {
			console.log('Grown in:' + eachCountry);
		});
	}
}
// this above code would prove to be repetious doing this over and over

// this is a better way
// Constructor Pattern for Creating Objects
function fruit(theColor, theSweetness, theFruitName, theNativeToLand) {
	this.color = color;
	this.sweetness = sweetness;
	this.fruitName = theFruitName;
	this.nativeToLand = theNativeToLand;

	this.showName = function() {
		console.log('This is a ' + this.fruitName);
	}

	this.nativeTo = function() {
    this.nativeToLand.foreach(function(eachCountry) {
    	console.log('Grown in:' + eachCountry);
      });
	}
}
// with this type of pattern in place, you can create fruits very easliy;
var mangoFruit = new Fruit('Yellow', 8, 'Mango', ['South America', 'Central America', 'West Africa']);
mangoFruit.showName();// This is a Mango
mangoFruit.nativeTo();
// Grown in: South America
// Grown in: Central America
// Grown in: West Africa

var pineappleFruit = new Fruit('Brown', 5, 'Pineapple', ['United States']);
pineappleFruit.showName();// this is a pineapple

// this above method really shows how javascript can use inheritance
// an inherited property is defined on the objects prototype property. 
// For example: someObject.prototype.firstName = 'rich'

// an own property is defined directly on the object itself

// create an object
var aMango = new Fruit();
// now we define the mangoSpice property directly on the aMango object
// because we define the mangoSpice property directly on the aMango object, it is an own property because of aMango, not an inherited property
aMango.mangoSpice = 'some value';

// to access a property of an object, we use object.property
console.log(aMango.mangoSpice); // 'some value'
// to invoke a method of an object, we use object.method(), for example
aMango.printStuff = function() { return 'Printing';}
// Now can we call the printStuff method
aMango.printStuff();

// Prototype pattern for creating objects
function Fruit() {

}
Fruit.prototype.color = 'Yellow';
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = 'Generic fruit';
Fruit.prototype.nativeToLand = 'USA';
Fruit.prototype.showName = function() {
	console.log('This is a ' + this.fruitName);
}

Fruit.prototype.nativeTo = function() {
	console.log('Grown in:' + this.nativeToLand);
}

// And this is how we call the Fruit() constructor in this prototype pattern
var mangoFruit = new Fruit();
mangoFruit.showName();
mangoFruit.nativeTo();
// This is a generic Fruit
// Grown in USA

