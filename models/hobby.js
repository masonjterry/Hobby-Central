let orm = require("../config/orm.js");

let hobby = {
  all: function(cb) {
    orm.all("hobby_list", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("hobby_list", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("hobby_list", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = hobby;
