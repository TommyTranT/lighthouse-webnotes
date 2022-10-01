* Use Elephant SQL. Its free. 

# BREAD with Command Line

## Connect to Database
```js
// Connecting to Database
// npm i pg

const pg = require('pg');

// pg.Client // -> Singular Connection: One query at a time
// pg.Pool // -> Multiple Connection: At least 5 query at a time

// New postgress Client Connection
const Client = pg.Client; 

// Connect our Elephant SQL DB
const config = {
  user: 'kdjccbkx',
  host: 'jelani.db.elephantsql.com',
  database: 'kdjccbkx',
  password: 'vQriCRp7jNSNfJE_xB2DjcZYUAcauv7V',
  port: 5432
};

// URL from elephan SQL = postgres://kdjccbkx:vQriCRp7jNSNfJE_xB2DjcZYUAcauv7V@jelani.db.elephantsql.com/kdjccbkx

// New PG Clinet Connection with data for config
const client = new Client(config);

// Make the actual connection
client.connect() 
```
## Making Queries
Go on terminal. node the js file
```js
// Running queries

// Turn table and returns it in as array of objects
client.query('SELECT * FROM movie_villains;')
  .then((response) => {
    console.log(response);
  });

//  console.log(response):  
//   rows: [
//     { id: 1, villain: 'Agent Smith', movie: 'The Matrix' },
//     { id: 2, villain: 'Voldemort', movie: 'Harry Potter Series' },
//     {
//       id: 3,
//       villain: 'Wicked Witch of the West',
//       movie: 'Wizard of Oz'
//     },
//     { id: 4, villain: 'Thanos', movie: 'Avengers' }
//   ],
 --------------------------------------------------------------

client.query('SELECT * FROM movie_villains;')
  .then((response) => {
    console.log(response.rows);
  });

  // console.log(response.rows);
  // [
  //   { id: 1, villain: 'Agent Smith', movie: 'The Matrix' },
  //   { id: 2, villain: 'Voldemort', movie: 'Harry Potter Series' },
  //   { id: 3, villain: 'Wicked Witch of the West', movie: 'Wizard of Oz' },
  //   { id: 4, villain: 'Thanos', movie: 'Avengers' }
  // ]
```
End a connection with client.end();