console.log("Hello");

const db = require('./utils/db');
const sql = "SELECT * FROM department"; 

// const pm = db.load(sql);
// pm.then(function (rows) {
//     console.log(rows);
// }).catch(function (error) {
//     console.log(error);
// })

async function main() {
    const pm = db.load(sql);
    const rows = await pm;
    console.log(rows);
}

main();