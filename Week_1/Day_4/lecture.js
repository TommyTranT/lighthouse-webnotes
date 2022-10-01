// Why do we want to use functions

// Reusability
// Readability
// Easier to debug

// const someNames = ["Kenia", "Justin", "Tommy", "Jordan"];

// const loopOverNamesAndLogThem = function () {
//   // Loop over the names
//   for (const name of someNames) {
//     // For each name
//     // Log the name in console
//     console.log(`Hi ${name}!`);
//   }
// };

// Problem! Not reusable

// const someNames = ["Kenia", "Justin", "Tommy", "Jordan"];

// const loopOverNamesAndGreetThem = function (names) {
//   // Loop over the names
//   for (const name of names) {
//     // For each name
//     // Log the name in console
//     console.log(`Hi ${name}!`);
//   }
// };

// loopOverNamesAndGreetThem(someNames);

// const loopOverNamesAndDismissThem = function (names) {
//   // Loop over the names
//   for (const name of names) {
//     // For each name
//     // Log the name in console
//     console.log(`Bye ${name}!`);
//   }
// };

// loopOverNamesAndDismissThem(someNames);

// Duplicate behavior

// const someNames = ["Kenia", "Justin", "Tommy", "Jordan"];

// const loopOverNamesAndMessageThem = function (names, message) {
//   // Loop over the names
//   for (const name of names) {
//     // For each name
//     // Log the name in console
//     console.log(`${message} ${name}!`);
//   }
// };

// loopOverNamesAndMessageThem(someNames, "Hi");
// loopOverNamesAndMessageThem(someNames, "Bye");

// console.log("🎶🎵🎶 Hi Bob ! 🎶🎵🎶");
// console.log("HI BOB");
// C-style for loop : Classical, has the index, clunky a little, works with anything
// For..of : For the element OF the array
// For..in : For the key IN the object

// const singHello = function (value) {
//   console.log(`🎶🎵🎶 Hi ${value} ! 🎶🎵🎶`);
// };

// const yellName = function (name) {
//   console.log(name.toUpperCase());
// };

// const someNames = ["Kenia", "Justin", "Tommy", "Jordan"];

// // loopOverStuffAndDoSomething => .forEach
// const loopOverNamesAndDoSomething = function (names, doSomething) {
//   // Loop over the names
//   for (const name of names) {
//     // For each name
//     // Log the name in console
//     doSomething(name);
//   }
// };

// loopOverNamesAndDoSomething(someNames, singHello);
// // for (const name of someNames) {
// //   // For each name
// //   // Log the name in console
// //   singHello(name);
// // }
// loopOverNamesAndDoSomething(someNames, yellName);
// for (const name of someNames) {
//   // For each name
//   // Log the name in console
//   yellName(name);
// }
// Callback <- Relationship status

// Higher Order Function <- CEO / President of country / King
// loopOverNamesAndDoSomething(someNames);

// for (const name of someNames) {
//   // For each name
//   // Log the name in console
//   singHello(name)
// }

// IIFE <- Immediatelity Invocable Function Expression

// x + y = 5
// y = 10
// x = ?

// const someArray = ["hello", "bonjour", "hola", "guten tag"];

// const logElement = function (value, index, array) {
//   console.log(`The element ${value} is at position ${index} of the array ${array}`);
// };
// someArray.forEach(function (value, index, array) {
//   console.log(`The element ${value} is at position ${index} of the array ${array}`);
// });

// Function with no name -> Anonymous

const someNumbersInAList = [1, 2, 3, 4, 5, 6];

const personalForEach = function (array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i], i, array); // Buffet
  }
};

const basicLog = function (value) {
  console.log(value);
};
const fancyLog = function (value, index) {
  console.log(`${value} at position ${index}`);
};
const fancierLog = function (value, index, array) {
  console.log(`The element ${value} is at position ${index} of the array ${array}`);
};

// personalForEach(someNumbersInAList, basicLog);
// personalForEach(someNumbersInAList, fancyLog);
// personalForEach(someNumbersInAList, fancierLog);

const modifyArrayElements = function (list, modifierAction) {
  // Accumulator (output)
  const output = [];
  // Loop over the elements
  for (const element of list) {
    // Modify an element
    const newValue = modifierAction(element);
    // Store that modified element
    output.push(newValue);
  }
  // return accumulator
  return output;
};

// Almost like map
const doubleThatElement = function (element) {
  return element * 2;
};
const tripleThatElement = function (element) {
  return element * 3;
};
const doubleThatElementArrow = (element) => element * 2; //Implicit return

const tripleThatElementArrow = (element) => {
  return element * 3;
};

const result = modifyArrayElements(someNumbersInAList, (element) => element * 2);

console.log(result);

const someGrade = { score: 80, subject: "Math" };

const strictParentApproval = (grade) => {
  if (grade.subject === "history") {
    return true;
  }

  if (grade.score > 95) {
    return true;
  }

  return false;
};
const lenientParentApproval = (grade) => grade.score > 60;

const receiveParentJudgment = (grade, parent) => {
  if (parent(grade)) {
    return console.log("GOOD JOB.");
  }

  return console.log("I AM DISAPPOINT");
};

receiveParentJudgment(someGrade, strictParentApproval);
receiveParentJudgment(someGrade, lenientParentApproval);