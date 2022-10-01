const express = require('express')
const app = express()
const { users } = require('./data')
const { authUser } = require('./basicAuth') // -> imports function 'authUser' from 'basicAuth.js' file
const projectRouter = require('./routes/projects')

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

// Only logged in can go in here
app.get('/dashboard',authUser, (req, res) => { // -> added the function, authUser to check if someones logged in
  res.send('Dashboard Page')
})

// How to let specific roles access this route
app.get('/admin', authUser, (req, res) => {
  res.send('Admin Page')
})

const setUser = (req, res, next) => {
  const userId = req.body.userId
  if (userId) {
    res.user = users.find(user => user.id === userId)
  }
  next()
}

app.listen(3000);