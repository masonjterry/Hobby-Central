let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let PORT = process.env.PORT || 8080;
let db = require("./models");
let exphbs = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/hobbyController")(app);
// require("./controllers/userController")(app);


//sync set true or false if we have to deploy
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
