console.log("Hello");

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'student',
  port : '3306'
});
 
connection.connect();

// const sql = 'SELECT 1 + 1 AS solution';
const sql = 'SELECT * FROM account';

connection.query(sql, function (error, results, fields) {
  if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
    console.log(results);
});
 
connection.end();