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









