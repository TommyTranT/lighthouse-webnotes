const express = require('express');

const pg = require('pg');
const Client = pg.Client; 

const config = {
  user: 'kdjccbkx',
  host: 'jelani.db.elephantsql.com',
  database: 'kdjccbkx',
  password: 'vQriCRp7jNSNfJE_xB2DjcZYUAcauv7V',
  port: 5432
};

const client = new Client(config);
client.connect() 

const morgan = require('morgan');

const port = process.env.PORT || 54321;
const app = express();

app.use(morgan('dev'));

// Getting the whole table in json
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const villains = response.rows;

      // res.render('villain', {villains}); use with EJS
      res.json(villains);
    })
})

app.get('/villains/:id', (req, res) => {
  const id = req.params.id;

  client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      const villain = response.rows[0]; // -> pust [0] if you just want the obj

      res.json(villain);
      // RESULT EXAMPLE
      // {
      //   "id": 4,
      //   "villain": "Dr. Strange",
      //   "movie": "Avengers"
      //   }
    });
});



  const newVillainName = process.argv[4];                         //    $1        $2
  client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;',[id, newVillainName])
    .then(() => {
      console.log('Villain has been updated'); // -> Just updating so no output
      client.end();
    });
    break;
app.listen(port, () => {
  console.log(`the app is listening on port ${port}`);
});