// Chapter 2
// Program Structure

// A fragment of code that produces a value is called an expression. 
// Every value that is written literally ( 23, 'dog') is an expression. 
// An expression between parentheses is also an expression, as is a binary operator applied to two expressions or a unary operator applied to one. 

// A program, is simply a list of statements

// This is a program
1;
!false

// Semicolons: can be tricky to use. As I go through this, I will try to make sure semi colons are correct

// after a variable has been defined, its name can be used as an expression. The value of such and expression is the value the variable currently holds. 

var ten = 10;
console.log( ten * ten);

// important to note variables can start with $ and _.
// when a variable points at a value, that does not mean it is tried to that value forever. The = operator can be used at any time on existing variables to disconnect them from their current value and have them point to a new one

var mood = "light";
console.log('mood');
// light
mood = 'dark';
console.log(mood);
// dark

// a good way to think of variables (in js) is as tentacles, rather than boxes. They do not contain values, they grasp them. 
// 2 variables can refer to the same value. A program can access only the values that it still has a hold on. When you need to remember something, you grow a tentacle to hold on to it or you reattach one of your exising tentacles to it

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105

// if you ask for the value of an empty variable, you get undefined.

// A single var statement can define multiple variables. The definitions are seperated by commas
var one = 1, two = 2;
console.log(one + two);
// 3

// The collection of variables and their values that exist at a given time is called the enviornment. 
// even when a program starts up, it is not empty. It contains variables that are part of the language standard. 

// a lot of the values provided in the default enviornment have the type function. 
// A function is a piece of program wrapped in a value. Such values, can be applied in order to run the wrapped program. 
// Example: in a browser enviornment the variable alert holds a function that shows a little dialog box with a message it is used:
// alert ("Good Morning!");





