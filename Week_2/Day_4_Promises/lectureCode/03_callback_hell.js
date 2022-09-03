// Using multiple callbacks
// Error handling with callbacks

// Returns a random element from an array
const arrSample = (list) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

// Simulating a potential error message
// will return an error message or null
const errorSample = () => {
  const errors = [
    'I got my fingers stuck in a bowling ball.',
    null,
    null,
    null,
    null,
    'I broke my little toe.',
    null,
    null,
    null,
    null,
    'My dog’s depressed.',
    null,
    null,
    null,
    null,
    'A chicken attacked my mother.',
    null,
    null,
    null,
    null,
    'I have a new puppy and I need to play with him.',
    null,
    null,
    null,
    null,
  ];

  return arrSample(errors);
};

// Select a random user after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the user
const getUser = (callback) => {
  const users = [
    'Yoshi',
    'Mario',
    'Luigi',
    'Peach',
    'Bowser',
    'Wario',
    'Rosalina',
    'Toadette',
  ];
  const user = arrSample(users);
  const error = errorSample();

  console.log('Getting the user...'); 
  setTimeout(() => {                  // If an error occured during the 2000ms time
    if (error) {
      callback(error, null);          // Callback error which equals a function to return a random error message, skips CL on L60
    } else {
      callback(null, user);           // If no error, CL L60 and gets user which is a function that returns random user. 
    }
  }, 2000);
};

// Select a random meal after a delay (simulating a request to an API)
// Sends back the error if any, otherwise sends back the meal
const getOrder = (callback) => {
  const menu = [
    'Burger',
    'Poutine',
    'Veggie Dogs',
    'Sub',
    'Pizza',
    'Burrito',
    'Burger Beyond Meat',
    'Smoked Meat',
  ];
  const order = arrSample(menu);
  const error = errorSample();

  console.log('Getting your order...');

  setTimeout(() => {
    if (error) {
      callback(error);
    } else {
      callback(null, order);
    }
  }, 3000);
};

// placeOrder should return how a waiter is delivering the order to the customer

// For example, the function could print out "Toadette takes the order of Rosalina"
// and then "Toadette is delivering a Sub to Rosalina"

// The users and the order need to be random each time by calling getUser and getOrder
// However, there for each call to getUser or getOrder, there's possibility of an error
// The error, if any, needs to be print out instead (ex. "My dog’s depressed.")

const placeOrder = () => {
  // get the waiter

  getUser((err, waiter) => { // either returns error meesage or the waiter
    if (err) {
      console.log(`Error: ${err}`);
      return; // this replace the need for an else
    }

    // get the meal
    getOrder((err, meal) => { // either returns error or the meal
      if (err) {
        console.log(`Error: ${err}`);
        return; // this replace the need for an else
      }

      getUser((err, customer) =>{ // either returns error or the customer.
        if (err) {
          console.log(`Error: ${err}`);
          return; // this replace the need for an else
        }
        
        console.log(waiter, meal, customer); //we have access to all values at the same time here
        console.log(`${waiter} takes the order of ${customer}`)
        console.log(`${waiter} is delivering a ${meal} to ${customer}`)
      })
    });

  });
};

placeOrder();