# notes
hashing - for passwords

encryption - usernames, lang preferance
  - information is encrypted using a key
  - it can be decrypted by the recipient using  the key


stealing cookies -  if cookie value is expoxed hackers can change the value and log in as someone else. 

hacker can get your data using on public wifi is use https
download ssl -> https

# cmd line

```js
const bcrypt = require('bcrypt'); // -> npm i bcrypt

const plaintextPassword = 'abcd';

// promise version
bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash', hash); // -> makes hash for password HERE
  })

// Need to compare password with hash
  bcrypt.compare(plaintextPassword, hash) // -> hash was made above
  .then((result) => {
    console.log('do the passwords match?', result); // -> result will be true or false
  });


```

cookies
```js
const users = {
  alice: {
    username: 'alice',
    password: '5678',
  },
  jstamos: {
    username: 'jstamos',
    password: '$2b$10$D8o.ocyUMkNaIGyWq9tQNu8GytbaCuuNQprTjRd3Bv0Q/MTRjFjt2'
  },
};

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/protected', (req, res) => {
  const username = req.cookies.username;

  if (!username) {
    retrun res.redirect('/login');
  }

  const user = users[username]
  if (!user) {
    return res.redirect('/register');
  }
})

```
register - store a hash ver of pass instead of plain ver
```js


app.post('/register', (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;

  // users[newUsername] = {
  //   username: newUsername,
  //   password: newPassword, // -> need to change this so that it takes in the hash
  // };

  bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(newPassword,salt); // -> returns hash with the password and salt
    })
    .then((hash) => {
      // insert this hash passowrd as part of the new new users object
      users[newUsername] = {
        username: newUsername,
        password: hash
      };
      console.log('users', users);
    })

  res.redirect('/login')
});

// now we need to let them login by comparing hashes
app.post('/login', (req, res) => {
  const testUsername = req.body.username;
  const testPassword = req.body.password;

  const user = users[testUsername];
  if (!user) {
    return res.status(401).send('no user with username');
  }

  bcrypt.compare(testPassword, users[testUsername].password); // -> need plain text than the hash
  .then((result) ==> {
      if (result) { // ->  if result = true
      res.cookie('username', user.username);
      res.redirect('/protected');
    } else {
      return res.status(401).send('password incorrect');
    }
  })
})
```
encrypting cookie value
when we login, the cookie value is the username in plain text. So we are going to encrypt it
```js
const cookieSession = require('cookie-session') // -> replace cookie parser

app.use(cookieSession({
  name: 'cookiemonster',
  keys: ['my secret key', 'yet another secret key']
}));

app.post('/login)...'
res.cookie('username', user.username)
req.session.username = user.username;

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
const username = req.session.username; // -> cookie values are stored in session 
//...
})


app.post('/logout', (req, res) => {
 // res.clearCookie('username');
req.ression = null;
res.redirect('/login');
})
```



rest api
``` js

```