var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Hackmeslim1998',
  database : 'mvp'
});

module.exports = connection;