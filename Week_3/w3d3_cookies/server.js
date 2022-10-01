// Setup 
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const languages = require('./languages.json') // -> when you require a json file, it becomes an object
const app = express();
const port = process.env.PORT || 3001; // -> If this is truthy, use it 
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
//------------------------------------------------

// Set Empty users OBJ
const users = {};

// GET /home
app.get('/home', (req, res) => {
  const languageChoice = req.cookies.language; // -> inside the cookies obj, I want to grab the cookie name 'language' and return its value (en, ko, fr, etc);

  const templateVars = {
    heading: languages.homeHeadings[languageChoice], // -> Using the obj from the json file, with languageChoices being our variable of 'ko'
    body: languages.homeBodies[languageChoice],
  }

  res.render('home', templateVars);
})

// GET/about
app.get('/about', (req, res) => {
  const languageChoice = req.cookies.language;

  const templateVars = {
    heading: languages.aboutHeadings[languageChoice],
    body: languages.aboutBodies[languageChoice],
  }

  res.render('about', templateVars)
});

// GET /language-choice/:language   -> dynamic choices
app.get('/language-choice/:language', (req, res) => { // -> hyperlinks will change our :languange variable
  // set a cookie -> build in express
  res.cookie('language', req.params.language); // -> saves data when data is being posted. cookie is called language and will equal to language variable

  // redirect the user
  res.redirect('/home');
})

// GET /register    -> User gives us username and password info
app.get('/register', (req, res) => {
  res.render('register');
})

// POST /register   -> lets take the inputed data and save it in our own object
app.post('/register', (req, res) => {
  const email = req.body.email; // -> let 'email' be the input we revieved when they typed the email
  const password = req.body.password;
  const id = Math.random().toString(36).substring(2,6) // -> ID to identify this paticular user

  const user = { // -> putting all of the info into an object
    id: id,
    email: email,
    password: password,
  };

  users[id] = user; // -> update our users object with this user. (updating id, email, password)
  console.log(users)

  res.redirect('/login');
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
})

// POST /login
app.post('/login', (req, res) => {
  const email = req.body.email; // -> let email be the email they inputted
  const password = req.body.password;

  // Handle negatives first
  if (!email || !password) { // -> If they didnt give an email or password,
    return res.status(400).send('please enter an email address AND a password') // -> return error 400, bad request
  }

  // Look up the user in the users database
  let foundUser = null;
  for (const userId in users) { // -> loop in each user in 'users' obj
    const user = users[userId]; // -> let variable 'user' equal our [obj][user key]
    if (user.email === email) { // -> if the email in our database is equal to what the user typed,
      foundUser = user; // -> variable foundUser will equal the user info that was inputed.
    }
  }

  // If the user did not match
  if (!foundUser) {
    return res.status(403).send('no user with that email exists');
  }

  // Check if passwords match
  if (foundUser.password !== password) { // -> if the users password does not equal what was inputed,
    return res.status(401).send('wrong password'); // -> return error message
  }
  // We found a user, now we need to set the cookie
  res.cookie('userId', foundUser.id); // -> setting our cookie to equal the 'id' we randomly generated for each user

  // send user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  console.log(req.cookies);
  const userId = req.cookies.userId; // -> Make variable equals the cookies userId

  const user = users[userId]; // -> Make user the obj users with the key that we got from the cookie

  const templateVars = {
    user: user // -> can use user.email, user.password, or user.id in the template file because we put the whole obj in
  };
  
  res.render('protected', templateVars);
});

// POST /logout  
app.post('/logout', (req, res) => {
  res.clearCookie('userId');

  res.redirect('/home');
})

//------------------------------------------------
app.listen(port, () => {
  console.log('app is listening')
})

// Notes
// cookies allow us to see a page based on the cookie we have
// page in english requires a cookie that has variable english.
// using a json file to have all of our different possible outputs (same message, different languages)
// After register
//    *register - cookie - home
//    *register - login - cookie - home <-- were gonna use this one