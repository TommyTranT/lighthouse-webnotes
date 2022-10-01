# Data Types
```js
False datat types
 Boolean => false
 Number => 0
 String => "";
 Null => null
 Undefined => undefined

0, "", null, undefined => Emptiness => Evaluated to false

 Symbol => "" (Special)
 BigInit => 0 (Special)


Data Structures
 Object => {} No falsy Object
 Array => []No falsy Object
 ```

 # Why Objects

```js
// Working for hard coded data and variables is not a great idea. 
const materialOfMug = "Ceramic";
const colorOfMug = "White";
const capacityOfMugInMl = 350;
const contentOfMug = "Coffee";


// Main reason to use objects is to structure our data properly.
// Also use to describe properties of a specific element. 
const mug = {
  material: "Cermaic",
  color: "White",
  capacityInML: 450,
  content: "Coffee",
}
```
# Array or Object

If we have mug1 and mug 2,

its better to use array to list them instead of putting them in a obj.

```js
const mugListObj = {
  1: mug1,
  2: mug2,
}
// Better use array in this case

const mugListArr = [mug1, mug2];

// IF the order doesn't matter than array is probably a good choice
```
## Object to make the same Obj using C-style For loop

```js
// 1. 'mugArmy' is an empty object.
// 2. 'mugObj' is the object we want to make
// 3. 'i < 100' will make the obj 100 times.
// 4. My empty object gets each mugObj PUSHED into the object. 
// const mugArmy = [];

for (let i = 0; i < 100; i++) {
  const mugObj = {
    material: `Ceramic`,
    color: `white`,
    capacityInMl: 450,
    content: 'Coffee',
  };
  mugArmy.push(mugObj);
}

console.log(mugArmy);
```

# Keys

## Accessing Keys

```js
const potato = {
  name : "Russett",
  weight: 400,
  avatar: "🥔"
}
// Dot Notation
 potato.name // Russett - Literal

// Square Notation
potato["name"] // Works! (Russett)
potato[name] // Not Work! (Error) - variable 'name' does not exist

// Use Square if we dont know the key in the time of writing (like writing a function)
const keyThatWeWantToAccess = "avatar";
potato[keyThatWeWantToAccess];

// Another example of Square
const someObjects = {
  string: "Hello",
}

const someKey = "string";

someObject[someKey] 
// "Hello"
```

## Changing Obj Value
```js
const potato = {
  name : "Russett",
  weight: 400,
  avatar: "🥔"
}

potato.name = "Yukon Gold" 
// Changes name to Yukon Gold

potato.nickname = "Potaty"
// Adds nickname as a new key and Potaty as a new value.

```

# Methods
Functions are are in context of a specific Object. 
```js
// 1. Both objects have a function called 'munch'
// 2. However, the function acts differently based on the object it is in.
const potato = {
  name : "Russett",
  weight: 400,
  avatar: "🥔",
  creationDate: new Date("2022-01-01"),
  nutrients: [{name: "fiber", concentrationInPercent: 20}],
  munch: () => {
    console.log("Ow!");,
  },
};

const crazyPotato = {
  munch: () => {
    console.log("OMG THAT HURTS ARE YOU CRAZY")
  },
}

potato.munch();
// "Ow!"

crazyPotato.munch();
// "OMG THAT HURTS ARE YOU CRAZY"
```
# Iterate!

## Get the keys using for..in
```js
// Use for..in to loop in the object and 'key' would refer to the keys in the object. 
const person = {
  name: "Bob",
  nickname: "Robert",
  age: 9001,
};

for (const key in person) {
  console.log(key);
  // name
  // nickname
  // age
}
```

## Get the values using for..in
```js
// Just have to add 'person[key]'. Use [] because we arnt looking for the key named 'key', we want the value.
const person = {
  name: "Bob",
  nickname: "Robert",
  age: 9001,
};

for (const key in person) {
  console.log(key, person[key]);
  // name Bob
  // nickname Robert
  // age 9001
}
```
## Getting Keys and Values using For..of
This is better because it has less phantom values

```js
const person = {
  name: "Bob",
  nickname: "Robert",
  age: 9001,
};
// Strips everything but the values and returns it in an Array
for (const value of Object.values(person)) {
  console.log(value);
}
// Bob
// Robert
// 9001

// Strips everything but the keys and returns it in an Array
for (const key of Object.keys(person)) {
  console.log(key)
}
// name
// nickname
// age

// Get the values and Keys
for (const key of Object.keys(person)) {
  console.log(key, person[key]) // <= add the obj[key]
}
```

## Big Objects
```js
const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        },
      },
    },
  },
}

// If we wanted the value of 'second' which is 'level: 2 we could do chain command.

console.log(bigObject.floors.main.floors.second)

// We could break it down: Assign commands to other variables. 

const entryFloor = bigObject.floors
const mainFloor = entryFloor.main
const secondFloor = mainFloor.floors.second
```
# THIS

Useful when we are writing a similar method for multiple functions

```js
// Notice that the method 'greet' refers to the obj.name for both.
const potato = {
  name: "Grelot",
  greet: () => {
    console.log("Hi my name is", potato.name) 
  }
}

const friedPotato = {
  name: "Frites",
  greet: () => {
    console.log("Hi my name is", friedPotato.name)
  }
}// We could use 'this' to make the method be the same and work for the objects seperatly. 
const potato = {
  name: "Grelot",
  greet: () => {
    console.log("Hi my name is", this.name) 
  }
}

const friedPotato = {
  name: "Frites",
  greet: () => {
    console.log("Hi my name is", this.name)
  }
}
```

# Finding the key based on the value
```js
// Function till get 2 parameters of (obj, value)
// Return the key if value is equal to the obj.key.value

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKey = (obj,value ) => {
// Loop through the object with object keys (scifi, comedy, drama)
  for (const key in obj) {
    if (obj[key] === value){   //<== if the keys (genres) is equal to the value parameter,
      console.log( `Match!`)
      return [key] // <== Return the key that matches!
    }
  }
}

console.log(findKey(bestTVShowsByGenre,"The Wire")); // 'drama'
```
# Get the number of obj keys in obj.
```js
const obj1Keys = Object.keys(object1).length;
```

# Compare objects by length and by the value

```js
const ab = {
  a: "1",
  b: "2",
}
const ba = {
  b: "2",
  a: "1",
}
const abc = {
  a: "1",
  b: "2",
  c: "3",
}

const eqObjects = (object1, object2) => {
  const obj1Keys = Object.keys(object1).length; 
  const obj2Keys = Object.keys(object2).length;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (obj1Keys !== obj2Keys) {
    return false
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true
}


console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

// * Help from website below
// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#:~:text=JavaScript%20provides%203%20ways%20to,Object.is()%20function
```
