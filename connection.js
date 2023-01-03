

const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'kimchi510',
        database: 'employees'
    },
    console.log(`Connected to the classlist_db database.`)
);

module.exports = db