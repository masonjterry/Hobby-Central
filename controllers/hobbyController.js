let express = require("express");

let router = express.Router();

let hobby = require("../models/hobby.js");


// router.get("/", function(req, res) {
//   res.render("index");
// });
//
// router.get("/all", function(req, res) {
//   hobby.all(function(data) {
//     let hbsObject = {
//       hobby: data
//     };
//     console.log(hbsObject);
//     res.render("all", hbsObject);
//   });
// });
//
// router.get("/add", function(req, res) {
//   hobby.all(function(data) {
//     let hbsObject = {
//       hobby: data
//     };
//     console.log(hbsObject);
//     res.render("add", hbsObject);
//   });
// });

module.exports = router;
