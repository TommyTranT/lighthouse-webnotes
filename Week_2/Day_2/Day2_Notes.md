# Main Thread

# Asynchronous Concepts
Using event loops to allow multi-tasking.

Below, `startWashingMachin` and `startDishwasher` do not need to finish for the rest of the program to run. 

```js
const startWashingMachine = () => { // => Prints 2nd
  console.log('Washing Machine Started'); 

  setTimeout(() => {
    console.log('Washing Machine Finished.');  // => Prints 6th
  }, 5000);
}

const startDishwasher = () => {
  console.log('Dishwashing Machine Started'); // => Prints 1st

  setTimeout(() => {
    console.log('Dishwashing Machine Finished.'); // => Prints 7th
  }, 8000);
}

const dustShelves = () => {
  console.log('Dusting Shelves'); // => Prints 3rd
}

const mopFloors = () => {
  console.log('Mopping floors'); // => Prints 4th
}

// start long running tasks
startDishwasher(); 
startWashingMachine(); 
dustShelves();
mopFloors();

// Output Order
Dishwashing Machine Started
Washing Machine Started
Dusting Shelves
Mopping floors
Washing Machine Finished.
Dishwashing Machine Finished.

```
! Function calls always execute right away. But the setTimeout method schedules a callback for later execution on the event loop.

! The main thread has to finish first before the event loop can even start!

## process.stdout.write

Prints our code on one line instead of creating a new line when we loop. 

# Printing a word individually with a delay

```js
//This will print the string one letter at a time with a delay per letter.

// KEY HERE is `1000 * (i + i));`. If we didnt have `(i + i)`
// the setTimout will print the WHOLE STRING.
const sentence = "hello there from lighthouse labs";

const textInterval = (string) => {

  for (let i = 0; i < string.length; i++) {
    setTimeout (() => {
      process.stdout.write(string[i])
    }, 1000 * (i + i));
  }
}

textInterval(sentence);
```
(Further Reading)[https://codehandbook.org/understanding-settimeout-inside-for-loop-in-javascript/]

# Adding a break line 

Add another timeout after loop with '\n' to make a new line.
 !!! Not the best solution !!!
 ```js
function textInterval (string) {
  
  for (let i = 0; i < string.length; i++) {
    setTimeout (() => {
      process.stdout.write(string[i])
    }, 50 * (i + i)); 
  }
  setTimeout (() => {
    process.stdout.write('\n')
  }, 5000); // =======> Just guessed 5000 to be longer than the loop to finish
}

textInterval(sentence);
 ```
# Moving our cursor back to the beginning 

`\r..\n`Moves our cursor to the beginning, replacing `hello`.

 ```js
process.stdout.write('hello from spinner1.js... \rheyyy\n');

//Output
heyyy from spinner1.js...
 ```

# Making an animation

Combining what we know, we can make an animation!

```js
// `\r` replaces each loop with the next

const sentence = `|/-\|/-\|`;
function textInterval (string) {
  
  for (let i = 0; i < string.length; i++) {
    setTimeout (() => {
      process.stdout.write(`\r${string[i]}`)
    }, 200 * (i + i)); 
  }
  setTimeout (() => {
    process.stdout.write('\n')
  }, 5000); 
}

textInterval(sentence);

```

# Input MULTIPLE inputs for the timer

Using process argv to input the timer.

Loop through process to have multiple times the timer will go off.

```js
// timer sets off beep depending on input
for( i = 2; i < process.argv.length; i++){ // ==> allows < 1 inputs.
// allow input with progessargv
let inputNum = Number(process.argv[i])
// set the timer based on the input
setTimeout (() => {
  process.stdout.write('\x07'); // ==> Beeping noise
},inputNum * 1000); // ==> (3 * 1000 = 3000ms)
}
```

# Event Hanlding and User Input

User Events: User inputs stuff into our page like click a link or button, submit form or drag and drop something. 

```js
// Code allows input in node. Turns every input into a '.'
// 'after callback' executes before the input. 
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');

// \u0003 maps to ctrl+c input
if (key === '\u0003') { // ==> Interrupt signal
  process.exit();
}
```



