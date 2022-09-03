// Messing with constructors
//class bubbleTea {



//   constructor(tea, size, toppings) {
//     this.tea = tea;
//     this.size = size;
//     this.toppings = ["tapioca"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }

// }

// let bubbleTea1 = new bubbleTea("green tea", "large", ["grass jelly"]);

// // let tommysBubbleTea = new bubbleTea("thai milk tea", "extra large", ["tapioca", "grass jelly"]);

// // console.log(tommysBubbleTea)

// // tracysBubbleTea.sugarLevel = ("25%")

// // console.log(tracysBubbleTea);


// bubbleTea1.addTopping("aloe vera");

// console.log(bubbleTea1);
//--------------------------------------------------------------------
// This class represents all that is common between Student and Mentor
// class Person {

//   // Moved here b/c it was identical
//   constructor(name, quirkyFact) {
//     this.name = name;
//     this.quirkyFact = quirkyFact;
//   }
//   // Moved here b/c it was identical
//   bio() {
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
//   }
// }

// // Now we make our Student and Mentor class.

// class Student extends Person {
//   // Stays in student since its specific to students.
//   enroll(cohort) {
//     this.cohort = cohort;
//   }
// }

// class Mentor extends Person {
//   // specific to mentors
//   goOnShift() {
//     this.onShift = true;
//   }
//   // specific to mentors
//   goOnShift() {
//     this.onShift = false;
//   }
// }


// let tomTran = new Student("Tommy", "Loves to punch stuff")

// console.log(tomTran.bio())

// tomTran.enroll("Aug2022")

// console.log(tomTran)

// let tracyLuong = new Mentor("Tracy", "Cant stop trying new things")

// console.log(tracyLuong.bio())

// tracyLuong.goOnShift(true);

// console.log(tracyLuong)
//--------------------------------------------------------------------
// Using Super
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
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

// DRIVER CODE

const tracyLuong = new Mentor('Tracy', 'Cant stop trying new things');
console.log(tracyLuong.bio());
/*

//--------------------------------------------------------------------