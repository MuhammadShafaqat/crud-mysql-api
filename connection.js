const mysql = require('mysql2');
var mysqlConnection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Mysql_$27890',
   database:'employeedb'
})

mysqlConnection.connect((err)=>{
    if (err) {
        console.log('Error in DB connection');
    }else {
        console.log('Database connected successfully' + JSON.stringify(err,undefined,2))
    }
})

module.exports = mysqlConnection