# Errors

```js
// Using try catch to try something to see if its an error. 
const someName = "Mike";

try{
  someName = "Bethany"; // Trying to change CONST someName
}
catch(error){ // Catched error
  console.log("There was an error", error.name) //error.message to show the actual error message
}
console.log(someName); // But still prints Mike.
```

## Handling Inputs
```js
// Using an try/catch within an object.
// can use error.message for a short message or
// show the full message with just error. 
const logNameOfUserObject = (userObj) => {
  try{
    console.log(userObj.name);
  } catch (error) {
    console.log("There was an error with user Object");
    console.log(error.message);
    console.log(error);
  }
};

logNameOfUserObject();

```

# Promises
Works like in real life. 

Lets say you want a bag of chips from a vending machine.

  a) When you put the money in and the chip is coming out, your promise is pending.

  b) If the chip gets stuck, your promise is revolked.

  c) If you get the back of chips, your promise is resolved.

When working with async functions, it is better to use promises than callback functions.

## Basic Promise
```js
// Want to boil water. Use Math.random to give it 50% of working. 
// if it works, return resolve. if not return reject.

const boilWater = () => {  
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5){ 
      return resolve()
    }
    return reject("Oven broke")
  })
}

// Need then and catch or else resolve and reject = undefined

// // This only applies to boilWater!!!
boil()
  .then(() => console.log("Water is boiling"))
  .catch(() => console.log("The oven is broken"))
```


## Chained Promises
```js
// Now we are adding More function that uses promises. 
const boilWater = () => {  
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5){ 
      return resolve()
    }
    return reject("Oven broke") // <== Need to add message here
  })
}

const putPastaInWater = () => {
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5){
      return resolve()
    }
    return reject("Pasta fell on the floor"); // <== Need to add message here
  })
}

// Use boil water and put pasta in water together (chain promises)

boilwater() //1. Boil water.
  .then(() => putThePastaInWater()) //2. If successful, put pasta in water.
  .then(() => console.log("Pasta boiling was a success")) // 3. Runs final success message.
  .catch((error) => console.log(error)); // OR If error, print error message in reject parameter
```

## Using Promise for Network request to fetch data
Lets say we want to know the weather,
  1) We can have a button we press to fetch the data

  2) The data is being fetch which means our promise is pending

  3) If data comes back, promise is fullfilled. Could parseData to show the information.

  4) If the data failed, we can log the error to see what happpened to our request.

  5) Both cases, stop will use the finally method to stop the animation regardless of the outcome.

```js
console.log(startAnimation);
request("HTTP")
  .then((data) => parseData(data))
  .catch((err) => console.log(err))
  .finally(() => stopAnimation);
```

# JavaScript Object Notation (JSON)
A data format ahat underpins many modern web services.

Built on 2 structures
  1) A collection of name/value pairs
  2) An ordered list of values

```js
// An Object encoded using JSON:
{
  "name": "New York City".
  "boroughs": [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "The Bronx",
    "Staten Island"],
    "population": 8491079,
    "area_codes": [212, 347, 646, 718, 917, 929].
    "position": { "lat": 40.7127, "ling": -74.0059}
}

// keys are always double-quoted strings. Values can be numbers, strings or object themselves.
```

## Serialization

Converts objects or data structures into a format that can be stored or transmitted between computers. Typically as a string of text. The opposite of going from String -> Object is called deserialization.

## JSON.parse()

Turns Strings into Objects

Parse a string as JSON, optionally transform the produced value and its properties, and return the value.

## JSON.stringify()

Turns Objects into Striings

Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

### Testing it out

```js
// 1) Create a valid JSON String:

const jsonString = const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object

jsonString // a string, of course :) <== '{"a":1, "b":2, "foo":"bar"}'

// 2) Convert eh string into an object by "parsing" it:
const obj = JSON.parse(jsonString);
obj // <== { a: 1, b: 2, foo: 'bar' }

// 3) Modify the Object:
// Delete the key and value of "foo"

delete obj.foo;
obj  // <== { a: 1, b: 2}

// 4) Serialize it back to a String:
JSON.stringify(obj);
obj // <== '{"a":1,"b":2}'
```

# API

Allows other systems to work together. 

Like Yelp using Google Maps to show nearby restaurants with yelp scores.

Like using Facebook API to log onto other applications and websites. 

# An example of Request and Require
```js
// Request and Require 
const request = require ('request');
request('http://www.google.ca', (error, response, body) => {
  console.log('error:', error); // Print error if one occured
  console.log('statusCode:', response && response.statusCode); // Print the response status if a response was received
  console.log('body:',body); // Print the HTML for the google homepage.
});

```