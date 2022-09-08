// SET UP
// npm init -y    --> creates json 
// npm i express  --> downloads express server
// npm i morgan   --> outputting everytime some makes request to your server
// npm i ejs      --> download ejs
// .gitignore -> node_modules   

const { application } = require('express');
const express = require('express'); 
const morgan = require('morgan'); 

const app = express(); // -> Making an express app
const port = process.env.PORT || 3005; // -> Using a new port + environment variable to keep my data secret

app.use(morgan('dev')); // -> All middleware (morgan) use app.use. 'dev' is just one of the display options of morgan
app.use(express.urlencoded({ extended: false })); // -> Required for encoding text input from client like req.body

app.set('view engine', 'ejs'); // -> Tells VSCode we want to render with '.ejs'
//---------------------------------------------------------------------------------------------------------

// Original Object on breads
const breads = {
  abcd: {
    name: 'rye',
    yeast: 5,
    flour: 3,
    expiryDate: 'Aug 22, 2022'
  },
  efgh: {
    name: 'baguette',
    yeast: 2,
    flour: 6,
    expiryDate: 'Oct 22, 2022'
  },
  ijkl: {
    name: 'sour dough',
    yeast: 1,
    flour: 5,
    expiryDate: 'Sept 9, 2022'
  },
  mnop: {
    name: 'NaN bread',
    yeast: 2,
    flour: 4,
    expiryDate: 'Sep 21, 2022'
  },
} 

// BROWSE - GET /breads | Displaying our Data
// Server side rendering => create html on server side 
// Going to look for files in views folder
app.get('/breads', (req, res) => { // -> Made new route '/breads'
  // res.json(breads); // -> !Testing Tool! | Take this obj, turn it to json and send to '/breads' 

  const templateVars = { // -> templateVars is just a standard name. Has to be Obj. Prevents chain calling for object values
    breads: breads // -> Defining our 'breads' obj as a keywords 'breads' for ejs to use
  };
  res.render('browse', templateVars) // -> Take this template and this data and mash them together
})

// ADD - GET /breads/new --> Input the data of a new bread on a new form page
app.get('/breads/new', (req, res) => {
  res.render('new-bread-form');
});

// ADD - POST /breads --> Post that data into our existing object
app.post('/breads', (req, res) => {

  // Lets label our small keys first
  const name = req.body.name; // -> Remember, req.body is our input, name is the label we gave that input name.
  const yeast = req.body.yeast;
  const flour = req.body.flour;
  const expiryDate = req.body.expiryDate;

  // Now we will put that in a new object
  const newBread = {
    name: name,
    yeast: yeast,
    flour: flour,
    expiryDate: expiryDate
  };

  // We need a random generated 4 digit key for the new bread
  const newId = Math.random().toString(36).substring(2, 6); // -> Formula gets random string, cuts first 2 index, ends at index 6

  // bread object, here is a newBread object with its own newID
  breads[newId] = newBread; // -> Add our new bread into our original bread object

  console.log(breads);
  // Send them back to the bread page
  res.redirect('/breads');
});

// READ - GET /breads/:breadId  --> Make one route that can handle millions of "breads" (or whatever) by making the end route a variable
app.get('/breads/:breadId', (req, res) => { // -> breadId is a variable which will be an input of an existing obj.key. For example, client enters /abcd...
  const breadId = req.params.breadId;  // -> 1) breadId will be: 'abcd'

  const bread = breads[breadId];  // -> 2) bread will be the obj: 'breads[abcd]'

  const templateVars = {
    bread: bread // -> 3) sending 'breads[abcd]' to the ejs file
  }

  res.render('read', templateVars); // -> take the read.ejs file and the obj and mash them together
});

// EDIT - GET /breads/:breadId/edit --> Make a form to edit an existing breads name. End points need to be different
app.get('/breads/:breadId/edit', (req, res) => { // --> If breadId is abcd, we are changing the bread name of abcd
  const templateVars = {
    breadId: req.params.breadId, // -> Allows edit-form to get the breadId. 
    bread: breads[req.params.breadId] // -> Allows edit-form to get the bread values (like name)
  };
  
  res.render('edit-form', templateVars);
})

// EDIT - POST /breads/:breadId  --> Take my new name and post it to my breads data
app.post('/breads/:breadId', (req, res) => {
  const breadId = req.params.breadId; // -> what bread key do want to edit? (abcd, etc)

  const newBreadName = req.body.newBreadName // -> newBreadName is what we inputed in the edit-form.ejs

  breads[breadId].name = newBreadName; // -> the name of the bread in 'abcd' is going to change to 'newBreadName'  

  console.log(breads); // -> console.log whole object to check result in terminal

  res.redirect(`/breads/${breadId}`) // -> Edit is done, redirect to bread details page. Need to ${} the bread Id
})

// DELETE  - POST /breads/:breadId/delete --> Delete a bread
app.post('/breads/:breadId/delete', (req, res) => { // -> breadId is 'abcd'
  const breadId = req.params.breadId // -> bread ID is a variable like 'abcd'

  delete breads[breadId]; // -> Delete abcd and its values from the breads object

  res.redirect('/breads');
});

//---------------------------------------------------------------------------------------------------------
// CATCHALL route --> Redirect to any pages we didnt make
app.get('*', (req, res) => {
  res.send('page not found')
});

app.listen(port, () => { // -> App to listen for clients entering the port
  console.log(`app is listening on port ${port}`); // -> Confirmation message
});

// Notes:
// If your browser is 'spinning' it means theres no respond on the server side.
// req.params: If client looks up breads/abcd, req.params will equal abcd
// Edit Process
//  * GET serve up a form for the user to edit
//  * POST that form to our server to make the update
// POST  -  REDIRECT  -  GET pattern.
// Put most generic routes at the bottom 