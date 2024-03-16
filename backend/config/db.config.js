
// import mysql2 wraper promise
const mysql = require('mysql2/promise');
//Prepare the connection parameters we use to connect to the database .env file
require('dotenv').config(); 
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}
// create the connection to pool
const pool = mysql.createPool(dbConfig);
// prepare afunction that will excute the sql asynchronously
async function query(sql, params) {
    const[rows, fields] = await pool.execute(sql, params);
    return rows
}
// Export the query function for use in the application 
module.exports = {query};






























