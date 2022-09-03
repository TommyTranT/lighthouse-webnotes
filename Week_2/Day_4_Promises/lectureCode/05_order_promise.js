const executorFct = (resolve, reject) => { // <== function is part of a promise
  // const error = false;   // <== uncomment L2, comment L3 to force error.
  const error = `Oh no! {customer}'s burger burst into flammes!`
  const time = Math.floor(Math.random() * 5000);

  //async operation
  setTimeout(() => {
    if (error) {
      reject(error); // Force false returns the reject action. (String on L3)
    }

    resolve(`${customer}'s big juicy burger is ready!. it took ${time} ms`); // If no issues, use resolve function 
  }, time);

  console.log(`Let's start cooking!`);
};

const processOrder = (customer) => {
  console.log(`${customer} orders a burger!`);

  const promiseObj = new Promise(executorFct); // creates a new promise called promiseObj with parameter (executorFct).

  return promiseObj;
};

processOrder('SpongeBob')
  .then((successMsg) => console.log(`Success: ${successMsg}`))
  .catch((errMsg) => console.log(`Error: ${errMsg}`));