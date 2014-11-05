// Arrays

// Array.join
// Joins all of the elements of an array into a string
var a = new Array('a', 'b', 'c');
var myVar1 = a.join();
var myVar2 = a.join(' ');
var myVar3 = a.join(' + ');

myVar1;
myVar2;
myVar3;

// Array.length
// find the numerical value of arrays. Used for looping
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
numbers;

// Array.pop
// removes the LAST elements from an array, AND returns it.
var myFish = ['salmon', 'tuna', 'snapper'];
var popped = myFish.pop();

console.log(myFish);
console.log(popped);

// Array.push
// adds one or more elements to the end of an array and returns the new length of the array
var sports = ['soccor', 'baseball', 'basketball'];
var total = sports.push('football', 'hockey');
console.log(sports);
console.log(total);

// Array.reverse
// reverses the order of an array
var anotherArray = [1, 2, 3, 4, 5];
anotherArray.reverse();

// Array.shift
// removes the first elements from an array and returns that elements. This method changes the length of an array
var aray_ray = [1, 2, 3, 4];
var shifted = aray_ray.shift();
console.log(aray_ray);
console.log(shifted);

// Array.slice
// the slice method returns a shallow copy of the original portion of an array. It does not alter it
 var fruits = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];
 var citrus = fruits.slice(2,4);
 console.log(fruits);
 console.log(citrus);

// Array.splice
// the splice method changes the content of an array, adding new elements while removing old elements
var someFish = ['tuna', 'salmon', 'octopus', 'snapper'];
var removed = someFish.splice(3,1,'drum');
console.log(someFish);
console.log(removed);
// the 1,0 in splice() is the first element (tuna), insert 'drum', and remove 0 elements
// if it was 3,1 for example, it would go to the 3rd spot, add drum, and return the 3rd element

//Array.unshift
// the unshift method adds one or more elements to the beginning of an array and returns the new length of the array
var arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);


// Strings

// String.charAt
// returns specified number from a string
var anyString = 'some string';
console.log(anyString.charAt(0));

// String.concat
// combines text of two or more strings together
var hello = 'hello';
var someString = 'again';
console.log(hello + someString);
console.log(hello.concat(' james,', ' have a nice day'));

// String.indexOf
// the indexOf method returns the index within the calling string object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found
'Blue Whale'.indexOf('Blue');
'Blue Whale'.indexOf('Blute');

// String.length
// the length property represents the length of a string
var s = 'string'
s.length;

// String.search
// the search method executes a search for a match between a regular expression and this string object
var str = 'visit China!';
str.search('i');
str.search('China');

// String.slice
// the slice method extracts a section of a string and returns a new string
var str1 = 'The morning has come';
var str2 = str1.slice(4,-3);
console.log(str2);
// slice() finds charcters. So in the example above it starts at 4, which is morning, and the - sign removes the value. So -3 would remove 'ome'

// String.split
// the split method splits a string object into an array of string by seperating the string into substrings
var strang = 'How are you today?';
var res = strang.split(" ");
console.log(strang);
console.log(res);

// String.sub
// the sub method creates a <sub> html element that causes a string to be displayed as subscript
var subText = 'subscript';
console.log(subText.sub());

// String.substr
// the substr method returns the characters in a string beginning at the specified location through the specified number of characters, or at the end of the string
var strangg = 'Hello World!';
var ress = strangg.substr(1,4);
console.log(ress);
// substr starts at the position given (1), and ends at the other value given (4)

// String.toLowerCase
// returns the calling string value to lowercase
console.log("ALPHABET".toLowerCase());

//String.toUpperCase
// returns the calling string value to UpperCase
console.log("alphabet".toUpperCase());






// Object.keys
// returns an array of a given objects own enumerable properties in the same order provided by a for loop
var array_ray = ['a', 'b', 'c'];
console.log(Object.keys(array_ray));