var db = require("../database-mysql");



var login = function (req, res) {
  db.query("SELECT * FROM items", (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};
var signup = function (req, res) {
    db.query("insert into users set ?", req.body,(err, result, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  };


module.exports = { login, signup };
