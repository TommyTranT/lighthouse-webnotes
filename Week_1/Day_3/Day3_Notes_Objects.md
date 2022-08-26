## The primitive data
string, number, boolean, null, undefined, symbol, bit it.

## Object VS Arrays

* Arrays are useful when
  * if you want to iterate (loop) through all the values. Exp, a list of emails 
  * When the order of the data is important. Exp, giving direcetions.
  * Length is important. Exp hockey game score. 

* Objects are useful when
  * you want to access a specific part of data and you know what they are.
  * complex nested information (list within a list).

## Objects
Everything thats not a primitive data is an object.

Most common use is grouping data together.
```javascript
const person1 = {
  name: "Jake",
  age: 37,
  isInstructor: true
}

const person2 = {
  name: "Nick",
  age: 32,
  isInstructor: false,
  pets: ["Spot", "Percy"],
  dateOfDeath: {
    month: null,
    day: null,
    year: {
      millenium: null
    }
  }
}

console.log(person2.dateOfDeath) // { month: null, day: null, year: { millenium: null } }

console.log(`${person1.name} is ${person1.age} years old.` ); // Jake is 37 years old.
```
## Read Objects

1. Dot Notation

For when you know the property name.

`console.log(person2.name)`

Chain notation. Gets millenium

`console.log(person2.dateOfDeath.year.millenium)` 

2. Square Bracket Notation. 

`console.log(person2["name"])`

For when you dont know the name of the object key. 

```js
// In this object, we want the value but sometimes we dont know the code. 
const urls = {
  "1j4920": "www.google.ca",
  "23kdk3": "www.facebook.ca",
  "k993kfd": "www.bionicle.com"
}

//This function will return the url code based on the website.
const id = fetch();
const fetch = () => {
  return "k993kfd";
};

// HAVE TO USE BRACKET
console.log(urls[id]); // www.bionicle.com

console.log(urls.id) would look for this code

const urls = {
  "1j4920": "www.google.ca",
  "23kdk3": "www.facebook.ca",
  "k993kfd": "www.bionicle.com" 
  id: __________  <= Doesnt exist!
  }
```

## Adding a new key + obj
```js
const obj = {
  tahu: "red",
  gali: "blue"
}

obj.lewa = "green"
```

## Changing/ creating is the same idea
```js
const obj = {
  tahu: "red",
  gali: "green"
}

obj.gali = "blue"; // changes current value
obj.lewa = "green"; // creates new key and value
```
## Changing a value based on the key
```js
const fetch = () =>{
  return gakoro; // Choose to change villager in ga koro.
}

const villageLeaders = {
  takoro: "jala",
  gakoro: "maku",
  }

  const changeLeader = fetch();

  villageLeaders[changeLeader] = "hahi"; // Changes ga koro to hahi
  ```
## Functions in Objects
  ```javascript
  const toa1 = {
    name: 'tahu',
    village: 'takoro',
    sayHello: function () {
      console.log("Hello!!");
    }
    introduceSelf: function() {
      console.log(`Name is ${this.name} and is in the village of ${this.village}.`) //this refers to toa1
    }
  }

  toa1.sayHello(); // "Hello!!"
```
Additionally you can also use Functions outside an Object
```js
const introduceSelf = function() {
  console.log(`Name is ${this.name} and is in the village of ${this.village}.`) //this refers to toa1
}

const toa1 = {
name: 'tahu',
village: 'takoro',
introduceSelf: introduceSelf
}

const toa2 = {
  name: "kopaka",
  village: "kokoro",
  introduceSelf: introduceSelf
}

toa1.introduceSelf(); // Name is tahu and is in the village of takoro.
toa2.introduceSelf(); // Name is Kopaka and is in the village of kokoro.
```
## THIS - Function refers to Objects and values inside the Object
```js
const toa1 = {
    name: 'tahu',
    village: 'takoro',
    introduceSelf: function() {
      console.log(`Name is ${this.name} and is in the village of ${this.village}.`) //this refers to toa1
    }
  }

  toa1.introduceSelf(); //`Name is tahu and is in the village of takoro`
  ```

  ## Create new Objects with same keys with a Function
  The example is a Toa creator
  ```js
  const createToa = (name, color) => {
    const toa = {
      name: name,
      color: color,
      introduceSelf: function() {
      console.log(`Name is ${this.name} and is the color ${this.color}`) //this refers to toa1
    }
   }
   return toa;
  }

  const toa1 = createToa(`Tahu`, `Red`);
  toa1.introduceSelf(); // `Name is Tahu and is the color Red`

  const toa2 = createToa(`Kopaka`, `White`);
  toa2.introduceSelf(); // `Name is Kopaka and is the color White`
```
  ## Looping over Objects
```js
const toa = {
  tahu: `red`,
  gali: `blue`,
  lewa: `green`
};

for (const color in toa) { //color is just a place holder name. can be named anything. 
  console.log(toa); 
/* Printed this line 3 times because we have 3 objects.
{ tahu: 'red', gali: 'blue', lewa: 'green' }
{ tahu: 'red', gali: 'blue', lewa: 'green' }
{ tahu: 'red', gali: 'blue', lewa: 'green' }
*/

console.log(`The color of each toa ${toa[color]}`); // just the colors: red, blue, green
}
```

## Looping through a nested Object
 Consider the Object
 ```js
 const toaMata = {
  tahu:{
    color: `red`,
    element: `fire`
  },
  pohatu:{
    color:`brown`,
    element: `stone`
  },
  onua:{
    color: `black`,
    element: `earth`
  }
}

//we want the following output
// red
// fire
// brown
// stone
// black
// earth
  
```
### If we don't know the keys, we have to do a nested for...in loop
```js
for (const toa in toaMata) {
  for (const toaInfo in toaMata[toa]){
    console.log(toaMata[toa][toaInfo])
  }
}
```

### If we do know the keys
```js
for (const toa in toaMata) {
  console.log(toaMata[toa].color);
  console.log(toaMata[toa].element);
}
```

## Object.
Using the same object about:
`Object.keys(toaMata)` [ 'tahu', 'pohatu', 'onua' ]
`Object.values(toaMata)`  { color: 'red', element: 'fire' },
                          { color: 'brown', element: 'stone' },
                          { color: 'black', element: 'earth' }
*You would need to console log it or assign it to a new variable.
