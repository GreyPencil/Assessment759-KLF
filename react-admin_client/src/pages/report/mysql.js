
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '190616',
    database: 'klfusers',
    port: 3306
},
    {multipleStatements: true});

module.exports = {connection};

// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });