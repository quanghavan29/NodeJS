var mysql = require('mysql');
const config = require('../config/config.json');

const pool = mysql.createPool(config.mysql);

module.exports = {
    load: function (sql) {
        return new Promise(function (resolve, reject) {
            pool.query(sql, function (error, results, fields) {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }
}
