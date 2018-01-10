var db = require("../models");
let Sequelize = require('sequelize');
const Op = Sequelize.Op;

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Hobbies.findAll({}).then(function(data){
      let categories = {};

      data.forEach(function(category) {
        categories[toTitleCase(category.category)] = true;
      });

      res.render("all", {categories: Object.keys(categories)} );
      //res.render("all", {hobbies: data} );

    });
  });

  // app.get("/hobby", function(req, res) {
  //   db.Hobbies.findAll({}).then(function(data){
  //     console.log("data", data);
  //     let hobbyList = {};
  //
  //     data.forEach(function(hobbyList) {
  //       hobbyList[toTitleCase(hobbyList.name)] = true;
  //     });
  //     console.log("hobbyList", hobbyList);
  //
  //     res.render("hobby", {hobbies: Object.keys(hobbyList)} );
  //     //res.render("all", {hobbies: data} );
  //
  //   });
  // });


  app.post("/api/users/verify", function(req, res) {
    db.User.findAll({}).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].username === req.body.username && data[i].password === req.body.password) {
          res.json(true);
        }
      }
    });
  });

  app.get("/api/:id", function(req, res) {
    db.Hobbies.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // app.get("/api/categories/:category", function(req, res) {
  //   const category = req.params.category
  //   // console.log("category", category);
  //   db.Hobbies.findAll({
  //     where: {
  //       [Op.or]: [{category: category}, {category: toTitleCase(category)}]
  //     }
  //   }).then(function(data) {
  //     console.log("hobbies", data);
  //     let hobbies = {};
  //
  //     // data munging
  //     data.forEach(function(hobbie) {
  //       hobbies[toTitleCase(hobbie.name)] = true;
  //     });
  //
  //     console.log("hobbies", Object.keys(hobbies));
  //     //return Object.keys(hobbies);
  //     res.send(Object.keys(hobbies));
  //     //res.render("all", {hobbies: Object.keys(hobbies)} );
  //     //res.json(data);
  //   });
  // });

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
    });
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
    });

  });

  }
