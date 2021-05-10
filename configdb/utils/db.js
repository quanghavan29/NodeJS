var mysql = require('mysql');
const config = require('../config/config.json');

var connection = mysql.createConnection(config.mysql);

module.exports = {
    load: function (sql) {
        var cn = mysql.createConnection(config.mysql);
        connection.connect();
        connection.query(sql, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            connection.end();
        });
    }
}