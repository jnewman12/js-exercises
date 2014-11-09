// Understand Closures w/ ease

// closures allow programmers to program creatively, expressively, and concisely. 
// a closure is an inner function that has access to the outer functions variables - scope chain.
// the closure has 3 scope chains
  // - it has access to its own scope (variables defined between curly brackets)
  // - it has access to the outer functions variables
  // - and it has access to the global variables

// you create a closure by adding a function inside another function

function showName(firstName, lastName) {
	var nameIntro = 'Your name is ';
	// this function has access to the outer function variables, including the parameter
	function makeFullName() {
		return nameIntro + firstName + " " + lastName;
	}

	return makeFullName();
}  
showName('Michael', "Jackson");

// classic jQuery example
$(function() {
	var selections = [];
	$('.niners').click(function(){ // this has access to the selections variable
		selections.push(this.prop('name')); // update the selections variable in the outer functions scope

	});
}); 

// Closure Rules
// 1. Closures have access to the outers function variable even after the outer function returns
	function celebrityName(firstName) {
		var nameIntro = 'This celebrity is ';
		// this inner function has access to the outer functions variables, including the parameter
		function lastName(theLastName){
			return nameIntro + firstName + " " + theLastName;
		}
		return lastName;
	}
	var mjName = celebrityName('Michael'); // the celebrityName outer function has returned
	// the closure lastName is called here after the outer function has returned above
	// the closure still has access to the outer functions variables and parameter
	mjName('Jackson'); // This celebrity is Miachel Jackson


// 2. Closures store references to the outer function variables
	function celebrityID() {
		var celebrityID = 999;
		// returning an object with some inner functions
		// all the inner functions have access to the outer functions variables
		return {
			getID: function() {
				// this inner function will return the UPDATED celebrityID variable
				// it will return the current value of celebrityID, even after the change function changes it
				return celebrityID;
			},
			setID: function() {
				// this inner function will change the outer function's variable anytime
				celebrityID = theNewID;
			}
		}
	}
	var mjID = celebrityID(); // the celebrityID function has returned
	mjID.getID(); // 999
	mjID.setID(567);// changes the outer functions variable
	mjID.getID(); // 567 it returns the updated celebrityID variable

// 3. Closures gone AWRY
// because closures have access to the updated values of the outer functions variables, they can alos lead to bugs when the outer functions variable changes with a for loop
function celebrityIDCreator(theCelebrities) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities.length; i++) {
		theCelebrities[i]['id'] = function() {
			return uniqueID + i;
		}
	}
    return theCelebrities
}
var actionCelebs = [{name: 'Stallone', id:0}, {name: 'Cruise', id:0}, {name: 'Willis', id:0}];
var createIDForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIDForActionCelebs[0];console.log(stalloneID.id());// 103    

