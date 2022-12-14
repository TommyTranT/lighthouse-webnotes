const processOrder = (customer, callback) => {
  const time = Math.floor(Math.random() * 5000); // getting a value between 0 - 5000
  // how do we deal with an error occuring in the async operation?
  // const error = `Oh no!${customer}'s burger burst into flammes!`;     <== uncomment L4 and comment L5 to get error = true. 
  const error = false;
  setTimeout(() => {
    // how can I deal with an error?
    if (error) {
      callback(error, null); // we need 2 arguments.
    } else {
      callback(null, `${customer}'s big juicy burger is ready!. it took ${time} ms`); // we need 2 arguments.
    }                                                                          // If we dont add null, 'Error:' will always show from L20
  }, time);

  console.log(`Let's start cooking!`);
};

processOrder('Sponge Bob', (errorMsg, successMsg) => { //Takes in customer,(callback if error, callback if success from L8-11)
  if (errorMsg) {
    console.log(`Error: ${errorMsg}`); //IF error, consolelog string + callback function
  } else {
    console.log(`Success: ${successMsg}`);
  }
});

console.log('Sponge Bob waits for his burger...');