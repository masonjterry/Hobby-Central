var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("all");
  });

  app.get("/api/all", function(req, res) {
    db.Hobbies.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/add", function(req, res) {
    res.render("add");
  });

  app.get("/newuser", function(req, res) {
    res.render("newuser");
  });

  app.post("/api/user", function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then(function(data) {
      res.json(data);
    })
  });

  app.post("/api/hobby", function(req, res) {
    db.Hobbies.create({
      category: req.body.category,
      name: req.body.name,
      user: req.body.user,
      materials: req.body.materials,
      instructions: req.body.instructions,
      images: req.body.images,
      videos: req.body.videoss
    }).then(function(data) {
      res.json(data);
    })
  });
}
