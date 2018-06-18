const express = require('express');
const eSession  = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
mongoose.connect('mongodb://127.0.0.1:27017/local');
var localStrategy = require('passport-local').Strategy;
const app = express();
const path = require('path');
app.use(bodyParser.urlencoded());

//start sessions
app.use(eSession({
  secret : "We have your details",
}));
app.use(passport.initialize());
app.use(passport.session());

/////////////////////////signup code starts///////////////////////////

var UserSchema = mongoose.Schema({ //schema
  fname: String,
  lname: String,
  password: String,
  email: String,
  gender: String,
  city:String
});
var Users = mongoose.model("Users", UserSchema); //db collection
app.post("/signUp", (req, res) => {

  var User = new Users();               //----         
  User.fname = req.body.fname;               //||||
  User.lname = req.body.lname;               //||||
  User.email = req.body.email;               //||||
  User.password = req.body.password;         //||||  ====>>>>Request and middleware to User Object to store in db
  User.gender = req.body.gender;             //||||
  User.city = req.body.city;                 //||||
  User.save(function (err, req) {            //||||
      if (err) {                             //||||
          console.log(err);             //----
      } 
  });
});



//////////////////////////////////signup code ends///////////////////////////////


/////////////////////////////////login code starts here/////////////////////////
passport.use(new localStrategy({
  usernameField:'email',
  passwordField:'pwd'
},
(usernameField,passwordField,next)=>{
var User = Users.findOne({
  email:usernameField,
  password:passwordField
},(err,user)=>{
  if(user){
    next(null,user)
  }
  else{
    next(null,false)
  }
})
})
);
passport.serializeUser((User, next) => {
  next(null, User.id);
});
passport.deserializeUser((UserId, next) => {
  var User = Users.findOne({ _id: UserId }, function (err, User) {
      next(null, User);
  });
});
app.post("/login", passport.authenticate("local"), (req, res) => {
  console.log('success')
  res.send('success')

});


  app.use(express.static('./1063/build'))
  app.listen('3010')