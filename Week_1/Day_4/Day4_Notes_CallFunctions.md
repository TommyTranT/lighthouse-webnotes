# The 3 loops
1. C-style for loop: Classical, HAS index, works with anything
2. For..of: for the element of the array
3. For..in: for the key IN the object

# Looping through Object and log each to console.

```js
// 1. Function has no parameters.
// 2. loop will declare `name` as each key in the `someNames`     Object
// 3. Logs each name.
// 4. declares the function
const someFireToas = ["Tahu", "Vakama", "Jaller", "Lhikan"];

const loopOverNamesAndLogThem = () => {
  for (const name in someFireToas) {
    console.log(`Hi ${name}!`);
  }
};
 
 loopOverNamesAndLogThem()
//  Hi Tahu!
//  Hi Vakama!
//  Hi Jaller
//  Hi Lhikan
```
The problem with this code is that is is not reusable!

# Making a function reusable

Now by adding a parameter, the function will work for any Object with a list of names.
```js
const someFireToas = ["Tahu", "Vakama", "Jaller", "Lhikan"];
const someIceToas = ["Kopaka", "Nuju"]

const loopOverNamesAndLogThem = (listOfNames) => {
  for (const name in listOfNames) {
    console.log(`Hi ${name}!`;)
  }
}

loopOverNamesAndLogThem = (someFireToas); 
// Will print the same 
// Or print someIceToas instead
```

# Adding a second parameter

What if we wanted to say bye instead of hi? 

We could make a second function thats similar but theres a better way

Instead of our function just saying hi, we will add a second parameter `message` that will let us customize the message.

```js
// 1. added `message` to the parameter
// 2. added `message` to the console.log
// 3. included the `message` when I called the function

const someFireToas = ["Tahu", "Vakama", "Jaller"];

const loopOverNamesAndMessageThem = (names, message) => {
  for (const name of names) {
    console.log(`${message} ${name}!`)
  }
};

loopOverNamesAndMessageThem = (someFireToas, "Hi");
loopOverNamesAndMessageThem = (someFireToas, "Bye");
// Hi Tahu!
// Hi Vakama!
// Hi Jaller!
// Bye Tahu!
// Bye Vakama!
// Bye Jaller!
```

# Change the second parameter into a Function

Instead of a simple message, we can replace that parameter
with another function.

The function `singHello` adds music notes around our name

```js
// 1. The function `loopOverNamesAndDoSomething` take in 2 parameters.
//    An object of names AND a Function.

// 2. The function loops in each name and have the function do      something to each name.

const singHello = (name) => {
  console.log(`🎵🎵 Hi ${name} 🎵🎵`)
}

const someFireToas = ["Tahu", "Vakama"];

const loopOverNamesAndDoSomething = (names, doSomething) => {
  for (const name of names) {
    doSomething(name); //The 2nd function uses `name` as its     parameter HERE
  }
};

loopOverNamesAndDoSomething = (someFireToas, singHello);
// `🎵🎵 Hi Tahu 🎵🎵`
// `🎵🎵 Hi Vakama 🎵🎵`
```

Our function still does one thing

loopOverNamesAndDoSomething still just loop over and get the names and do something

Making them sing is a different function

doSomething can be ANY OTHER FUNCTION. Making them sing is just an example.

## Here is our Function in basic terms
```js
const action(element) {
  //action 
}

const array = [];

const forEachElement = function(array, action) {
  for (const element of array) {
    action(element);
  }
}

forEachElement(array, action)
```

## Reasons it crashes
Take for example:
`loopOverNamesAndDoSomething = (someFireToas, singHello);`

IF we do not input the second parameter it will crash because doSomething will be undefined.
`loopOverNamesAndDoSomething = (someFireToas);`

IF we try to use actual strings in the first parameter, it will crash because it is expecting an array.
`loopOverNamesAndDoSomething = ({`Tahu, Vakama, Jaller`}, singHello);`

## Higher Order Function

The Function `loopOverNamesAndDoSomething` is considered a higher order function because it requires another function to run.

## Callback Functions

The Function `singHello` is considered the callback functions of `loopOverNamesAndDoSomething`. 

By itself it is not a callback. But in terms of `loopOverNamesAndDoSomething`, it is THE callback function of it.

# ForEach

It is a method named For Each.

ForEach is basically the `loopOverNamesAndDoSomething` Function we made earlier. It takes an array and applies a function to it.
```js
// 1. `toaFire` is our array
// 2. `logElement` is our action function
// 3. The for each formula is: array.forEach(actionFunction)
//  "for each element you want to do something!

const toaFire = ["Tahu", "Vakama", "Jaller"];

const logElement = (value, index, array) => {
  console.log(`The name ${value} is at position ${index} of array ${array}`)
}

toaFire.forEach(logElement);
```
## For Each with an if statement
```js 
// Lets say we only want to find Tahu in the array, we would have to have an if statement in our action function to use for each.

const toaFire = ["Tahu", "Vakama", "Jaller"];

const findAndLogElement = (value, index, array) => {
  if (value === `Tahu`) {
  console.log(`Found ${value} at ${index}`)
  }
}
toaFire.forEach(findAndLogElement);

```
## Anonymous Function

A function we cant reference to. A function we can only use once.
```js
// Instead of using the variable `logElement` for the function and coding the function into forEach, that function is now an anonymous function.

toaFire.forEach((value, index, array) => {
  console.log(`The name ${value} is at position ${index} of array ${array}`)})
```

## Anonymous Array

An array we only use once and cant refer to.
```js
// Instead of using the arrays name and coding them directly, that array is now an anonymous array. 

["Tahu", "Vakama", "Jaller"].forEach(logElement);
```

If you use it one time, use the anonymous version of it

## C-Style For Each Function

This function will allow us to have access to an arrays value, index and list of array.
```js
// 1. C-style loop gets us access to the value = array[i], index = i, array = array.
const someNumbersInAList = [1, 2, 3,];

const personalForEach = (array, action) => {
  for (let i = 0; i < array.length; i++) {
    // Buffet: Giving us all posibilites. Dont need to use them all
    action(array[i], i, array) 
  }
}

// Examples of functions using the 3 parameters
// NOTE Order is IMPORTANT. Need to match the position, name is not important
const basicLog = (value) => {
  console.log(value);
};

const fancyLog = (value, index) => {
  console.log(`${value} at position ${index}`);
};

const fancierLog = (value, index, array) => {
  console.log(`${value} at position ${index} in array ${array}`);
};
personalForEach(someNumbersInAList, basicLog); 
// 1
// 2
// 3

personalForEach(someNumbersInAList, basicLog);   
// 1 at position 0
// 2 at position 1
// 3 at position 2

personalForEach(someNumbersInAList, basicLog); 
// 1 at position 0 in array 1,2,3
// 2 at position 1 in array 1,2,3
// 3 at position 2 in array 1,2,3

```

## Taking an Array, Modify element and return NEW Array

Before we just access the element, Now we want to actually modify them and return a new array. 
```js
// 1. `output` is what happens at the end of my function
// 2. `element` will refer to my array elements (1,2,3)
// 3. `newValue` is my action function being called with my element as its parameter
// 4. We than push the modified element into the variable output and return it.
// 5. `result1` and `result2` calls the function and holds the modified array. 
// 6. We need to console log the results variable to see the results. 

const someNumbersInAList = [1, 2, 3,];

const modiftyArrayElements = (list, modifierAction) {
  const output = []
  for (const element of list) {
    const newValue = modifierAction(element);
    output.push(newValue)
  }
  return output;
};

const doubleThatElement = (element) => {
  return element * 2
}

const tripleThatElement = (element) => {
  return element * 3
}

const result1 = modifyArrayElements(someNumbersList, doubleThatElement)
console.log(result1);
// [ 2, 4, 6 ]

const result2 = modifyArrayElements(someNumbersList, tripleThatElement)
console.log(result2);
// [ 3, 6, 9 ]
```

### Arrow Function
```js
// Instead of writing our modifier functions as: 
const doubleThatElement = (element) => {
  return element * 2
}

// We could use an Arrow Function
const doubleThatElement = (element) => element * 2;

// Since they are so small, we can use them like an Anonymous Function.
// So instead of :
const result1 = modifyArrayElements(someNumbersList, doubleThatElement)
console.log(result1);

// We could remove the function and replace `doubleThatElement` with:
const result1 = modifyArrayelements(someNumbersList, (element) => element * 2);

// Dont need to write return cause its implied. 
```
MAP is basically like our modifyArrayFunction

## Complex Conditions
Using Functions and refering to an Object as a condition. 

```js
// 1. The object `someGrade` which represents my grades. I have an 80 in the subject math.

// 2. Now we define our condtions for our 2 types of parents

// 2(a). `strictParentApproval` will take an object `grade` and if grade.subject is history, it will return true (in our case, happy). If the grade scoreis greater than 95 they will be happy. If both of these are not met than false is returned. 

// 2(b). `lenientParentApproval` will also take in our grade and as long as the grade.score is over 60, true will return. 

// 3. Now our high order function `recieveParentJudgment` will take our object `grade` and our callback conditions (parents approvals) and if the parents approval return true, console log `GOOD JOB`. If it doesnt return true (so is false) than return `I AM DISSAPOINTED`.

// 4. Now call our function to run it. 


const someGrade = {score:80, subject:"Math"}

const strictParentsApproval = grade => {
  if (grade.subject === "history"){
    return true
  }

  if (grade.score > 95){
    return true
  }

  return false
}

const lenientParentApproval = grade => grade.score > 60

const recieveParentJudgment = (grade, parent => {
  if (parent(grade)) {
    return console.log("GOOD JOB.");
  }

  return console.log("I AM DISSAPOINTED");
})

recieveParentJudgment(someGrade, strictParentApproval);
// I AM DISSAPOINTED

reciveParentJudgment(someGrade, lenientParentApproval);
// GOOD JOB
```
## Recap
Callback functions are a relationship between a higher order function and a normal function.

Callback funtions can be
a) an action (log, store, etc)
b) a modifier (multiply, add, concatenate, etc)
c) a condition (filtering, complex conditions)
