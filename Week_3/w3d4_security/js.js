const bcrypt = require('bcrypt');

const plaintextPassword = 'abcd';

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    return hash;
    // console.log('hash', hash);
  })

  // hash was made above
const hash = "$2b$10$D8o.ocyUMkNaIGyWq9tQNu8GytbaCuuNQprTjRd3Bv0Q/MTRjFjt2"

// Need to compare password with hash
  bcrypt.compare(plaintextPassword, hash) 
  .then((result) => {
    console.log('do the passwords match?', result); // -> result will be true or false
  });