const mysql = require('mysql2/promise');
require("dotenv").config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const connection = mysql.createConnection({
        host,
        user,
        database,
        password,
        dateStrings: true
    })

module.exports = connection;

