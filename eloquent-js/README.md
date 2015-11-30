exercises code from end of chapters for reference. project chapter code in their own folders, again for reference

# chapter 2

`looping a triangle`

```javascript
var counter = '';
for (var i = 0; i < 7; i++) {
    console.log(counter += "#");
}
```

`fizz buzz`

```javascript
for (var i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 15 === 0) {
        console.log('FizzBuzz!');
    } else {
        console.log(i);
    }
}
```

`chess board`

```javascript
var board = 8;
for (var i = 0; i < board; i++) {
    var lines = ""; 
    for (var j = 0; j < board; j++) {
        var addr = i + j;
        if (addr % 2 === 0) {
            lines += '#';
        } else {
            lines += ' ';
        }
    }
    console.log(lines);
}
```


# chapter 3
`minimum`

```javascript
function minimum(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else if (num1 > num2) {
        return num2;
    } else {
        return "numbers are equal";
    }
}
minimum(2, 3)
```

`recursion`

```javascript
function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

isEven(7)
```

`bean counting`

```javascript
function countChar(string, word) {
    var count = 0; 
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === word) {
          count += 1;
      }
    }
    return count;
}
countChar("bananas", "a")

function countBs(string) {
    return countChar(string, "b");
}
countBs("banana");
```

# chapter 4
`range, sum`

```javascript
function ourRange(start, finish) {
    var array = [];
    for (var i = start; i < finish + 1; i ++) {
        array.push(i);
    }
    return array;
}

ourRange(1, 10);


// with eval (which apparently shouldnt really be used)
function sum(numbers) {
    return eval(numbers.join('+'));
}
sum([2, 3, 4])

// without eval
function sum(numbers) {
    var total = 0;
    for (i = 0; i < numbers.length;i++) {
            total += numbers[i];
    }
    return total;
}
sum([2, 3, 4])
```


`Reversing an Array`

```javascript
function reverseArray(array) {
    var otherArray = [];
    for (var i = array.length-1; i >= 0; i--) {
        otherArray.push(array[i]);
    }
    return otherArray;
}
reverseArray([1, 2, 3])
```

```javascript
function reverseArrayInPlace(array) {
  var temp;
  var i = array.length - 1;
  var j = 0;
  var pairs = array.length >> 1;

  while (j < pairs) {
    temp = array[i];
    array[i--] =  array[j];    
    array[j++] = temp;
  }
  return(array);
}
reverseArrayInPlace([1, 2, 3]);
```

# chapter 5
`flattening`

```javascript
function flatten(arr) {
    return arr.reduce(function(prev, current) {
        return prev.concat(Array.isArray(current) ? flatten(current) : current);
    }, []);
}

flatten([[0, 1], [2, 3], [4, 5]]);
```

`mother child age difference`

```javascript
// data set - http://eloquentjavascript.net/code/ancestry.js
function setData(obj) {
    return obj;
}
```