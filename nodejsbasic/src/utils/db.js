const mysql = require('mysql');
const config = require('../db.config.json');

const pool = mysql.createPool(config.mysql);

module.exports = {
    load: function(query) {
        return new Promise(function (resolve, reject) {
            pool.query(query, function (error, results, fields) {
                if (error) {
                    console.log(error);
                    return reject(error);
                }
                resolve(results);
            });
        });
    }
}