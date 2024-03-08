
// const { Pool } = require('pg');
require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USERNAME,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT || 5432, 
// });


// module.exports = pool;

import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const pool = postgres(connectionString)

export default pool
