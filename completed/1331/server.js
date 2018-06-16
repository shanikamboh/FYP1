var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
var eSession = require("express-session");
var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017');
app.use(bodyParser.urlencoded({ extended: true }));

var custumerSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String,
    gender: String
})
var Custumer = mongoose.model("custumers", custumerSchema);

app.post("/signUp", (req, res) => {

    var custumer = new Custumer();
    custumer.name = req.body.name;
    custumer.email = req.body.email;
    custumer.password = req.body.password;
    custumer.gender = req.body.gender;
    custumer.save(function (err, req) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/")
        }
    });
});

passport.use(new localStrategy({
    usernameField: "email",
    passwordField: "password"
},
    function (usernameField, passwordField, next) {
        var custumer = Custumer.findOne({
            email: usernameField,
            password: passwordField
        },
            function (err, custumer) {
                if (custumer) {
                    next(null, custumer);
                } else {
                    next(null, false);
                }
            });
    })
);
passport.serializeUser((custumer, next) => {
    next(null, custumer.id);
});
passport.deserializeUser((custumerId, next) => {
    var custumer = Custumer.findOne({ _id: custumerId }, function (err, custumer) {
        next(null, custumer);
    });
});
app.use(eSession({
    secret : "We have your details",
}));
app.use(passport.initialize());
app.use(passport.session());

app.post("/signIn", passport.authenticate("local"), (req, res) => {
    console.log("success");
    res.redirect("/home");

});

const port = 8080;

app.listen(port, console.log("Listening on port " + port));