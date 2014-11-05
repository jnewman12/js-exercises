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