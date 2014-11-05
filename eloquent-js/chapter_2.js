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

// a lot of functions are useful because of the side effects they produce

console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);


// Browswers also contain other functions besides alert for popping up windows. You can ask the user an "ok/cancel" question using confirm. 
// confirm("Shall we, then?");
// This returns a boolean; true if the user clicks ok, false if the user clicks cancel

// The prompt function can be used to ask an open question. A line of text can be typed into the dialog window, and the function will return this text as a string
prompt('tell me everything you know.', '...');

// When programs contain more than one statement, the statements are executed from top to bottom
var theNumber = Number(prompt('Pick a number', ""));
alert('Your number is the square root of ' + 
	  theNumber * theNumber);

// Conditional Execution (if/else)
var theNumber = prompt('Pick a number', '');
if (!isNaN(theNumber))
	alert('Your number is the square root of ' +
		theNumber * theNumber);

// or
var theNumber = Number(prompt('Pick a number', ''));
if (!isNaN(theNumber))
alert('Your number is the square root of ' + 
	theNumber * theNumber);
else
	alert('Hey. Why did you not give me a number :(');

// 'chaining'
var num = Number(prompt('Pick a number', '0'));

if (num < 10)
  alert('Small');
else if (num < 100)
  alert('Medium');
else
  alert('Large');

var number = 0;
while (number <= 12) {
	console.log(number);
	number = number + 2;
}    		
// while loops executes the statement as long as the expression produces a value that is true when converted to Boolean type

// Whenever you want to execute multiple statements inside a loop, wrap them in curly braces ({ and })
// a sequence of statements wrapped in braces is calles a block.

var result = 1;
var counter = 0;
while (counter < 10) {
	result = result * 2;
	counter = counter + 1;
}
console.log(result);

// the do loop is a control structure similar to the while loop.
// It is only different because a do loop always executes its body at least once, and it starts testing whether it should stop only after the first execution

do {
	var name = prompt('Who are you?');
} while (!name);
console.log(name);

// for loop
for (var number = 0; var number <= 12; number = number + 2)
console.log(number);

// this is 2^10 using for 
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
	result = result * 2;
console.log(result);

// other than a loop returning false, break is another way of immediately jumping out of a loop
// find a number greater than or equal to 20, divisible by 7
for (var current = 20; ; current++) {
	if (current % 7 == 0)
		break;
}  
console.log(current);

// the for construct in this does not have a part that checks for the end of the loop. 
// this means the loop will never stop unless the break statement is executed.

// continue is similar to break. When continue is encountered in a loop body, control jumps out of the body, and continues with the loops next iteration. 

// counter = counter + 1
// should be counter += 1
// *= 2 or -=1

// counting revisited
for (var number = 0; number <= 12; number += 2)
	console.log(number);

// Switch statements
switch (prompt('What is the weather like?')) {
	case 'rainy':
	  console.log('Remember to bring an umbrella');
	  break;
	case 'sunny':
	  console.log('Dress lightly.');
	case 'cloudy':
	  console.log('Go outside.');
	  break
	default:
	  console.log('Unknown weather type!');
	  break;    
}

// you can put any number of labels inside a case you want.

/* keypoints:
- programs are built out of statements (and those statements can contain statements and so on)
- statements tend to contain expressions, which can be built ouf of smaller expressions
- put statements after one another to give your program a top-bottom execution style
- variables are used to file pieces of data under a name, and are useful for tracking statement in a program
- the enviornment is the set of variables that are currently defined (prompt, alert for a fresh window)
- you can introduce disturbances in the flow by using conditional (if, else, switch) and looping (while, do, for)
- functions are special values that encapsulate a piece of a program. You invoke them by writing functionName(argument1, argument2). Such a function call is an expression, and may produce a value

