const mysql = require("mysql");
const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: '',
    database: "empleados_crud",
})

module.exports.db = db;


