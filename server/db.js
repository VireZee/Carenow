const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'carenow',
  password: '999666',
  port: 5432
});
module.exports = pool;