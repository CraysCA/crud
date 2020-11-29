const mysql = require('mysql');

//conexion a MYsql
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'universidad_db'
  });
  
  mysqlConnection.connect(function (error) {
    if (error) {
        console.log(error);
        return; 
    } else { 
        console.log("Base de datos conectada");
        return;
    }
  });

module.exports = mysqlConnection;  