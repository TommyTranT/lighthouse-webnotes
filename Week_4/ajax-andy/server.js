// Setting up a site
// npm init -y  -> installs package.json
// npm isntall express morgan

const express = require('express');
const morgan = require('morgan');

const port = process.env.PORT || 54321
const app = express();

// 2) Adding our Object here
const donuts = {
  'abc': {
    id: 'abc',
    name: 'Boston Cream',
    filling: 'custard',
    flavour: 'chocolate',
    sprinkles: false
  },
  'def': {
    id: 'def',
    name: 'Strawberry Jelly',
    filling: 'strawberry',
    flavour: 'kimchi',
    sprinkles: true
  },
};


app.use(morgan('dev'));

// 1) Express.Static
// Instead of a bunch of app.get, we create a public folder 'stuff for front end'
// and this function will allow all of my static code to be requested.
// In parameter, we put the name of that folder. (Usually called 'public')
app.use(express.static('stuff-for-front-end'));

// Tell our server to expect url encoded code
app.use(express.urlencoded({extended: false}));

// 2) Res.JSON (OBJECT || ARRAY)
// We want to send our object 'donuts' to the front end
// We are sending it as raw data and converted to array of objects
// If someone makes a request, they will json version of the objects

// GET /donuts
app.get('/donuts', (req, res) => {
  const donutArr = Object.values(donuts);
  res.json(donutArr);
});

// POST /donuts
app.post('/donuts', (req, res) => {

  // Takes serialized data and lets us turn it into an object
  const name = req.body.name   // -> req.body.name is the name of the inputed text from user. html -> new-donut -> name
  const filling = req.body.filling
  const flavour = req.body.flavour
  const id = Math.random().toString(36).substring(2, 5)

  const newDonut = {
    id,
    name,
    filling,
    flavour,
    sprinkles: true,
  }

  // Add into donuts array above
  donuts[id] = newDonut;
  console.log(donuts);

  // Need a response so send back a 'created' code
  res.status(201).send();
});



//-------------------------------------------------
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
//-------------------------------------------------