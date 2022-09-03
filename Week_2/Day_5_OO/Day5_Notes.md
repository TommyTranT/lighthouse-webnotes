# Object Orientation (OO)

Keep our code modeular and reduce repitition.

# Terminology

  - Method: Function tied with an Object. May modifty or ask the object for information. 
  
  - This: Whenever your method is accessing a property of another method on the same object, use this.

# Class Vs Object

Classes are blueprints (templates) to create instances of objects. 

# Create Class

1) Create a class. 

If you wanted to create a bunch of pizza objects, you would create a Pizza class. Capitalize first letter.

```js
class Pizza {

}
```

2) Create an object for a class.

```js
let pizza1 = new Pizza();
let pizza2 = new Pizza();
```
pizza1 and pizza2 are objects. They are instances of Pizza class because they were created with the the class.

They are 2 seperate pizzas which are made from the same recipe.

```js
pizza1 === pizza2; //false
```

# Methods and Properties

If we wanted all pizzas to start off with cheese allow other toppings to be added, heres how we do that.

The push method only works on arrays. So if you want to adjust something later, make it an array.
```js
class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}
```

You can add a topping to pizza1 like this
```js
pizza1.addTopping("pepporoni");

console.log(`Pizza 1 Toppings ${pizza1.toppings}`); // Pizza 1 Toppings cheese, pepporoni
```

# Add Method to a class
```js
class SomeClass {
  methodName(parameters) {
    // this is a method
  }
}
```
To add properties to the class:
```js
class SomeClass {
  someMethod() {
    this.hello = "hi"; // created a property called hello
  }
}
```

Using our pizza example: I am going to add a property called 'slices' and give it a value of 6 just for pizza1.
```js
pizza1.slices = 6;

console.log(pizza1)
// Pizza { toppings: [ 'cheese' ], slices: 6 }
```

Now I am going to eat a slice from pizza 1. Basically modifying the object value.

  1. I need to make a new function (similar to addToppings). The new function will be called 'eatSlice' with the parameter being the number of slices we took. 
```js
class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  eatSlice(numberOfSlice) {
    this.slices = this.slices - numberOfSlice;
  }
}
```
  2. To use the function follow below,
```js
pizza1.eatSlice(1);

console.log(pizza1)
// Pizza { toppings: [ 'cheese' ], slices: 5 }
```

# Constructor

A special kind of method that allows each object that is created with the class to have the same properties. 

Just like our example above, every pizza object will already have the property 'toppings' with a value of 'cheese'.
```js
class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }
}
```

## Customizing the Constructor
Every class can have a single constructor. Best to set up default stuff here. 

```js
class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}
```

Now when we make a pizza, we can use implement the new parameters (size and crust) and they will automatically go here.

```js
let pizza = new Pizza('large', 'thin')

let pizza = {
  pizza = {
  size: 'large',
  crust: 'thin',
  toppings: ["cheese"]
}
}
```
# Inheritance

## The Duplication Problem

We soon notice that sometimes our codes are similar of each other.

```js
class Student {
  // this constructor is identical to that of a mentor!
  constructor(name, quirkyFact) {
    this.name = name;
    this quirkyFact = quirkyFact;
  }

  // method for just students
  enroll(cohort) {
    this.cohort = cohort;
  }

  // identical! 
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor {
  // this constructor is identical to that of a student!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
    goOnShift() {
     this.onShift = false;
  }

  // identical! 
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
```
Notice that Student and Master have identical constructors and bio methods. They share name and quirkyFact as well. 

## A Solution with Inheritance
Move the shared code from two classes to another class. This technique is known as inheritance.

In this example we will call this new class Person. 

```js
// This class represents all that is common between Student and Mentor
class Person {

  // Moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  // Moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// Now we make our Student and Mentor class.

class Student extends Person {
  // Stays in student since its specific to students.
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }
  // specific to mentors
  goOnShift() {
    this.onShift = false;
  }
}
```
Student and Mentor inherit behavior and state information from Person using the keyword extends.

They also have their own codes specific to them. 

In this case, the relationship is:
  1) superclass = Person
  2) subclasses = Student and Mentor

  Now lets make a student and mentor!

```js
// They share the same parameters from Person.
let tomTran = new Student("Tommy", "Loves to punch stuff")
let tracyLuong = new Mentor("Tracy", "Cant stop trying new things")


// Both can use the bio function
console.log(tomTran.bio())
// My name is Tommy and here's my quirky fact: Loves to punch stuff

console.log(tracyLuong.bio())
// My name is Tracy and here's my quirky fact: Cant stop trying new things


// Using specific functions for roles.
tomTran.enroll("Aug2022")
console.log(tomTran)
/*
Student {
  name: 'Tommy',
  quirkyFact: 'Loves to punch stuff',
  cohort: 'Aug2022'
*/


tracyLuong.goOnShift(true);
console.log(tracyLuong)
/*
Mentor {
  name: 'Tracy',
  quirkyFact: 'Cant stop trying new things',
  onShift: false
*/

```
# Super

## Method Overriding and Super

### The Problem

Bio is a superclass function. What if we want to slightly change the string but keep the parameters the same?

#### Solution 1: Method Override
```js
// Superclass
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// Subclass
class Mentor extends Person {
  // Redefine the bio method.
  bio() {
    return `I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// No need to change student.

let tracyLuong = new Mentor("Tracy", "Cant stop trying new things")
console.log(tracyLuong.bio())
// `I'm a mentor at Lighthouse Labs. My name is Tracy and here's my quirky fact: Cant stop trying new things`;
```
We still had to type the whole bio. But what if we just wanted to add something but keep the rest?

We can use super!

#### Method 2: Super
```js
// Super class
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Adds that string infront of the bio function. 
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
    // I'm a mentor at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}  <== Basically doing this
  }
}

// DRIVER CODE

const tracyLuong = new Mentor('Tracy', 'Cant stop trying new things');
console.log(tracyLuong.bio());
/*
I'm a mentor at Lighthouse Labs. My name is Tracy and here's my quirky fact: Cant stop trying new things
*/
```
# Getters and Setters

Special methods that are used to get the value of a property or set the value of a property

```js
class Pizza {

  constructor() {
    this.toppings = ["cheese"];
  }

  setSize(size) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}
  
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m

```

2 Reasons to use this instead of using pizza.size to get 'm'.

## Validating Data

If our pizza sizes can only be a small, medium or large, validating data will only allow those 3 options to be inputted. 

Using the setter method, we can determine what options are avalible and validate that we are putting the info in the right one. 

```js
class Pizza {

  // ...

  // setSize now includes data validation
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
}

// DRIVER CODE
let pizza = new Pizza();
pizza.setSize('s');

```

## Computed Value

Useful for computing a value like the price of a pizza. If we add a topping, we would have to change the price. But now we dont know how much the pizza was before the topping charge. Now it will be more organzied.

```js
class Pizza {

  // ...

  getPrice() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}

// DRIVER CODE
let pizza = new Pizza();
pizza.getPrice();
```

## Get and Set Keywords

Use the get and set keywords for a nicer interface.
```js
class Pizza {

  // ...

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

let pizza = new Pizza();

pizza.price;      // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)
```
The syntax binds an objects property to a function. Not required, depends on situation.

Check lightcoin-crypto in lhl_core/W02D5_OO/lightcoin-crypto

For more reading, check out the [compass page](https://web.compass.lighthouselabs.ca/6afd030a-cccc-4e2f-9aa7-31fc0c6c8114)