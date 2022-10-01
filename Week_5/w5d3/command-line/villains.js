// Refer to BREAD.md for details

const pg = require('pg');

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

// New PG Clinet Connection with data for config
const client = new Client(config);

// Make the actual connection
client.connect() 
// -------------- SET UP -------------- //


// client.query('SELECT * FROM movie_villains;')
//   .then((response) => {
//     console.log(response.rows);
//     client.end(); // -> Async, ends the connection
//   });

  // console.log(response.rows);
  // [
  //   { id: 1, villain: 'Agent Smith', movie: 'The Matrix' },
  //   { id: 2, villain: 'Voldemort', movie: 'Harry Potter Series' },
  //   { id: 3, villain: 'Wicked Witch of the West', movie: 'Wizard of Oz' },
  //   { id: 4, villain: 'Thanos', movie: 'Avengers' }
  // ]

// Whatever we type after node filename.js [2] will be our command verb
const verb = process.argv[2];

// Sometimes we need to return an id number after. like node filename.js read 4 where prog.argv[3] = 4
const id = process.argv[3];

// Using switch. If verb = browse, do the query from above
switch(verb) {
  // Browse returns whole table
  case 'browse': 
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
      break;


  // Read returns one row based on id. { id: 4, villain: 'Thanos', movie: 'Avengers' }
  case 'read':
    // client.query(`SELECT * FROM movie_villains WHERE id = ${id};`)
    // Dont do it like above. Easy to attack with SQL injections. Instead it as 2 seperate pieces
    client.query(`SELECT * FROM movie_villains WHERE id = $1;`, [id])
      .then((response) => {
        console.log(response.rows[0]); // -> response.rows always returns an array. Use [0] to get row as an object
        client.end();
      });
      break;

  // Update a value from the table: node villains.js edit 4 'Dr. Strange' returns => { id: 4, villain: 'Dr. Strange', movie: 'Avengers' }
  case 'edit':
    const newVillainName = process.argv[4];                         //    $1        $2
    client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;',[id, newVillainName])
      .then(() => {
        console.log('Villain has been updated'); // -> Just updating so no output
        client.end();
      });
      break;

  // Insert into table.name (column 1, column 2) with parameters 1 and parameter 2: 
  // node villains.js add 'Venom' 'Spider-Man' => { id: 5, villain: 'Venon', movie: 'Spider-Man' }
  case 'add':
    const villain = process.argv[3];
    const villainMovie = process.argv[4];

    // Can make query into a variable for readibility
    const query = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';

    client.query(query, [villain, villainMovie])
      .then(() => {
        console.log(`${villain} had a terrible childhood`);
        client.end();
      })
    break;
    
  // Remove a row
  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;',[id])
      .then(() => {
        console.log('The villain has been vanquished')
      });
      break;

      // Adding a default if browse isnt found
      default:
        console.log('Please enter a valid BREAD verb');
        client.end();
}