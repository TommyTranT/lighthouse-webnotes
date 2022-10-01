## Recurrsions

A different way to loop.

```js
// simple example
// 1. `number` is 0
// 2. while number (0) is less than or equal to 12
// 3. console log number (which is 0)
// 4. number is now 0 = 0 + 2
// 5. Now it starts again from step 1 but `number` is 2.
let number = 0;           
while (number <= 12) {    
  console.log(number);    
  number += 2;
}
```
An example inside a function
```js
// 1. New function that takes a number
// 2. if that number is less than or equal 
//    to 12
// 3. print that number
// 4. !!!!! The function calls itself again
//    UNTIL number is greater than 12.
//    Each time it calls itself, number
//    grows by 2
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);
```
The recursive case is when the function will continue to call itself. Every time the function calls itself, the input gets closer and closer to the base case. 

The base case is when the function no longer calls itself. The input must gradually reach the base case.

We refer to number <= 12 as a recursive case, because as long as this is true, the function will continue to call itself.

We refer to number > 12 as a base case. If this is true, the function will not call itself.

## Pseudo Code: 
### sumToOne(n)
```js
function sumToOne(n) {
  if (n ===  1) {
    return 1;
  }
  return n + sumToOne(n - 1)
}
console.log(sumToOne(4)); // Prints 10

## Stack Overflow

When a loop runs to the max and you get an error `RangeError: Maximum call stack size exceeded`