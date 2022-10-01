// Class will represent each node in tree
class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = []
  }

  // Linking the subordinate to CEO
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  // Gets number of subordinates
  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  // Level to CEO
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iterations), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  // Same boss or not: true or false
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  // Who makes over a certain amount of money
  employeesThatMakeOver(amount) {
    let employees = []; // -> Create a new employees array to hold every employee that makes over the specified amount.
    if (this.salary > amount) {
      employees.push(this); // -> If the current employee makes over that amount, add them to the array.
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // -> Call this method on all of the current employee's subordinates and combine their results with the current results.
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  // Count total of employees in a department (main employee included)
  get totalEmployess() {
    let totalEmployess = 0; //1

    // Use depth first traversal to calculate the total employees

    return totalEmployees;
  }
}

// Creats the root(top) of the tree 
const ada = new Employee('Ada', 'CEO', 3000000.00);

// Employee directly below Ada:
const craig = new Employee('Craig', 'VP Software', 1000000.00);
const arvinder = new Employee('Arvinder', 'Chief Design Officer', 1000000);
const angela = new Employee('Angela', 'VP Retail', 1000000);
const phil = new Employee('Phil', 'VP Marketing', 1000000);

// We are linking the employees under CEO
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// Getting someones boss (employee.boss)
console.log(arvinder.boss);

// Number of subordinates
console.log(craig.numberOfSubordinates);

// How many people to CEO
console.log(craig.numberOfPeopleToCEO);

// Using employees that make over function
let wealthyEmployees = ada.employeesThatMakeOver(418401);