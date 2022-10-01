## Fancier Strings
Before we would use the following code to concatenate strings.

```javascript
const name = 'Alice';
console.log('Hello, ' + name + '!'); // logs: Hello, Alice!
```

But now we can use the following instead.

```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`); // logs: Hello, Alice!
```

Need to use back-ticks(`)

## Making a Function that returns the first value of an array
head = Name of the function. Use this to involk the function. 
arr = Refers to the array (3,4,5) that we added in the console.log.
firstValue = a variable that holds the first value in the array. Remember to return the variable. 

When trying to involk the array, make sure to include all brackets!

```javascript
let head = function (arr) {
  let firstValue = arr[0];
  return firstValue;
}
console.log(head([3,4,5]));
```

## Making a Function that returns everything but the first value
array.slice(num1, num2) - cuts out an array based on num1 and num2. Don't include num2 to show the whole array. 

```javascript
let tail = function (arr) {
  let tailValues = arr.slice(1);
  return tailValues;
}
console.log(tail([56,6,7,8,])); //prints out 6,7,8
```

## Slice the last value in a string
### kata/titleCase.js

Useful for when a string has a space at the end we dont want
```js
newString = 'Hello There ' //==> Notice the empty space at the end
result = newString.slice(0, -1);
//==> 'Hello There'
```

## A for loop that loops backwards
```javascript
//js file named 'reverse.js'
for (let j = process.argv.length - 1; j >= 0; j--) {
  console.log(process.argv[j]);
}
 //if we typed the following in the terminal: node reverse.js tommy tran
 //it will print tran THAN tommy
 ```

[Refer to example 2](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)

## Using process.argv
```javascript
// j will loop in what you type in the terminal.
// j prints the index number while process.argv[j] prints out what you typed.
for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}
```
[Further Reading](https://stackabuse.com/command-line-arguments-in-node-js/)

## Code to add 2 numbers (sum.js)
```javascript
var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}

console.log(sum);
```
1) First i = 2 to skip the slice code to cut out the first 2 lines.
2) sum = 0 and each loop will be added to sum.
3) Number(process.argv[i]) converts the inputed number to a number because 
elements in process.argv are always strings
 
[Tutorial](https://riptutorial.com/node-js/example/10945/process-argv-command-line-arguments)

## Function that reverse string using process.argv (reverse.js)

```javascript
// Assume the following is typed in terminal: 
// node reverse.js tommy 

// Function will reverse string and output it backwards
// Notice string is not declared in the function!!!
function reverse (string) {

  // Empty variable to hold the results or outcome
  var result = "";

  // For loop to loop backwords, with i starting at the last letter
  for (var i = string.length-1; i >= 0; i--) {
    // Result would print y, ym, ymm, ymmo, ymmot
    result += string[i];
  }
  return result;
};

// Second loop will let you input the string through the terminal,
// It loops through process.argv to output the strings you inputed.
// var i = 2 to skip first 2 lines in process.argv
// Note that the loop condition is NOT:    i <= process.argv.length;
for (var i = 2; i < process.argv.length; i++) {

// string is now declared with the value of 'tommy'
var string = process.argv[i];

// Output the string 'tommy' using the functin 'reverse' to reverse the letters.
console.log(reverse(string));
}
```

Code without comments
```javascript
function reverse (string) {
  var result = "";
  for (var i = string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

for (var i = 2; i < process.argv.length; i++) {
var string = process.argv[i];
console.log(reverse(string));
}
```
## Function that removes first letter to end and adds 'ay'
### Stretch pig-latin.js

```javascript
// Program takes first letter, adds to the end of word, plus adds 'ay' at the end.
// 'tommy' should print out 'ommytay'

// Part 1: Function should format the code correctly
// Notice that we use string instead of process.argv[i] to refer to the string!
function pigLatin (string) {
  // firstValue = 't'
  var firstValue = string[0];

  // otherValue = 'ommy'
  var otherValue = string.slice(1);

  // result = 'ommy' + 't' + 'ay'
  var result = (otherValue + firstValue + "ay");
  return result;
}

// Part 2: Loop will print out the results correctly
// string will now equal process.argv and work with the function above
// We are running the string 'tommy' through our functin 'pigLatin' and 'tommy' was
// inputted through process.argv[i]
for (var i = 2; i < process.argv.length; i++) {
var string = process.argv[i];
console.log(pigLatin(string));
}
```