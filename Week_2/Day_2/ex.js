// const startWashingMachine = () => { // => Prints 2nd
//   console.log('Washing Machine Started'); 

//   setTimeout(() => {
//     console.log('Washing Machine Finished.');  // => Prints 6th
//   }, 5000);
// }

// const startDishwasher = () => {
//   console.log('Dishwashing Machine Started'); // => Prints 1st

//   setTimeout(() => {
//     console.log('Dishwashing Machine Finished.'); // => Prints 7th
//   }, 8000);
// }

// const dustShelves = () => {
//   console.log('Dusting Shelves'); // => Prints 3rd
// }

// const mopFloors = () => {
//   console.log('Mopping floors'); // => Prints 4th
// }

// // start long running tasks
// startDishwasher(); 
// startWashingMachine(); 
// dustShelves();
// mopFloors();
// cd lighthouse-webnotes/Week_2/Day_2

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
if (key === '\u0003') {
  process.exit();
}
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');

