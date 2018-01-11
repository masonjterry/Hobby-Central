//================================
//server.js
//This file is the initial starting 
//point for the Node/Express server. 
//================================
// DEPENDENCIES
//================================

let express = require("express");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");

// Sets up the Express App
let app = express();
let PORT = process.env.PORT || 8080;

// Requiring models for synching
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Sets up Handlebar engines/routes
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Require the Controller model for routing
require("./controllers/hobbyController")(app);
// require("./controllers/userController")(app);

// Sequelize Call for creating the database
// sync set true or false change for deployment
// ask Instructor/TA upon deployment on the process 
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
