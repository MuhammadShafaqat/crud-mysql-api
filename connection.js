const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Mysql_$27890',
   port: 3307,
   database: 'employeedb'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log('Error in DB connection');
    } else {
        console.log('Database connected successfully' + JSON.stringify(err, undefined, 2));

        // Create table if it doesn't exist
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS employee (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                salary DECIMAL(10, 2) NOT NULL
            )
        `;

        mysqlConnection.query(createTableQuery, (err, result) => {
            if (err) {
                console.log('Error creating table:', err);
            } else {
                console.log('Table created or already exists.');
            }
        });
    }
});

module.exports = mysqlConnection;



// const mysql = require('mysql2');
// var mysqlConnection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'Mysql_$27890',
//    port:3307,
//    database:'employeedb'
// })

//  mysqlConnection.connect((err)=>{
//     if (err) {
//         console.log('Error in DB connection');
//     }else {
//         console.log('Database connected successfully' + JSON.stringify(err,undefined,2))
//     }
// })

// module.exports = mysqlConnection