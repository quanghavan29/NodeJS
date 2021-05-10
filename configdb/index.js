console.log("Hello");

 
const db = require('./utils/db');
const sql = "SELECT * FROM department";
db.load(sql);

async function main() {
    const results = db.load(sql);
    const rows = await results;
    console.log(rows);
}