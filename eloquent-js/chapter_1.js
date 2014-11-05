//Chapter 1 
// Values, Types, and Operators

/* 13 in Binary is 00001101 
0   0  0  0  1 1 0 1
128 64 32 16 8 4 2 1
*/

// 6 basic types of value 
// numbers, strings, booleans, objects, functions, and undefined values 
// The 4 data types are numbers, strings, booleans, and undefined values

// To create a value, you invoke it's name

// Javascript uses a fixed number of bits (64) to store a single number value

// For very big or very small numbers, you can also use scientific notation by adding an 'e' followed by the exponent of the number
// 2.998e8 or 2.998 x 10^8 = 299800000

// this is not always precise for extreme numbers. 
// Lesson: treat fractional digital numbers as approximations, not precise values

// Please Excuse My Dear Aunt Sally

// newline characters ( \n )can't be put between quotes

"This is the first line\nAnd this is the second"

// looks like
/* this is the first line
And this is the second */

// Advanced(?) Booleans:
// The rules for converting strings and numbers to boolean values state that 0 (NaN) and the empty string ("") count as false, while all the other values count as true
// Because of this, expressions like 0 == false and " " == false are also true. 
// For cases like this, where you do not want any automatic type conversions to happen, there are 2 additional operators: === and !==
// The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal. So " " === false is false 

// Basically, you combine and transform data values with operators. 
// You do this with the 4 data types numbers, strings, booleans, and undefined values
// and manipulate with comparison, logic, and uranry operators.

