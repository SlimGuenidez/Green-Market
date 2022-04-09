var db = require("../database-mysql");



var login = function (req, res) {
  db.query("SELECT * FROM items", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var signup = function (req, res) {
    db.query("insert into users set ?", req.body,(err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };


module.exports = { login, signup };
