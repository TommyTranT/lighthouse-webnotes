// Will check if user is logged in, if not throws an error

const authUser = (req, res, next) => {
  if(req.user == null) { // -> checks if user exist in user database if they exist
    res.status(403)
    return res.send('You need to sign in')
  }

  next() // -> tells middleware to move on to the next piece of middleware
}

const authRole = (role) => {
  return(req, res, next) =>{
    if(req.user.role !== role) {
      res.status(401)
      return res.send('Not Allowed')
    }
    
    next();
  }
}

module.exports = {
  authUser
}