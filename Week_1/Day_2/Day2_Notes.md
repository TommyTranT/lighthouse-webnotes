## Lecture Notes
Exit a program: process.exit

Better loop than c-stype loop
```javascript
//number being the loop going through the array args
for (let number of args) => more readable loop, no index
```
### Problem Solving
List steps to solve problem in english, not the syntax

Step by step, rinse and repeat

a) State the hypothesis

b) Verify the hypothesis

c) Make changes

## Github Notes
Check what branch you are on: git branch

Change branch name: git branch -M NewBranchName

Creates and switches branch: git checkout -b NewbranchName

Switches branches: git checkout NewBranchName

## Return the lowest value in an Array using Sort
### min.js

```javascript
// Write code here that returns the smallest value in numbers
const min = function(numbers) {
  
  //Sort an array, than get index 0 for smallest value.
  let arraySort = numbers.sort((a, b) => a - b);
  let smallNum = arraySort[0];

  //Return the smallest number to output in the function.
  return smallNum;

}
const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);
```

## Refactoring a program
### LoopyLightHouse

Loopys Original Code
```javascript
for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
}
```

New Code
Notice that if the number is a remainder of 3, it will add the string Loopy to the end.
This removes the third condition that its both a remainder of 3 and 4.
```javascript
for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}
```

## Loops through array and returns a string with comma's
### joinList.js

```javascript
let newString = " ";

//Make a function to loop through array
function joinList (arr){
  for (let i = 0; i < arr.length; i++){

    // Combines the array values into one string
    newString = newString.concat(arr[i]);

    // Add comma unless your are the last value
    if (i < arr.length - 1) {
      newString = newString.concat(", ");
     }
    }
  return newString;
}


// Test / Driver Code below...

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
```

## Rolls dice based on input + returns with comma's
### dice-roller.js

```javascript
// Make a random number generator
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

// Allow an input from progress.argv
let numOfRolls = 0;
for (let i = 0; i < process.argv.length; i++) {
  
  // Change process.argv input into number
  numOfRolls = Number(process.argv[i]);  
}

// Rolls dice based on input through loop
let results = "";
for (let j = 0; j < numOfRolls; j++) {
  
  //console.log("Dice roll: ", rollDice()); 
  // Takes rolls and makes them into one variable
  results += rollDice();

  // Takes variable and adds comma's
  if (j < numOfRolls - 1) {
    results = results.concat(", ");
   }
}

// Print the results
console.log("Rolled", numOfRolls,"dice:", results);
```