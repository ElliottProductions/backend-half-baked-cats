const { Pool } = require('pg');
//assigns a new Pool to the variable "pool". This will cache database connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSLMODE && { rejectUnauthorized: false },
});
//this line prints a message to the console when Postgres is connected to our app
// eslint-disable-next-line no-console
pool.on('connect', () => console.log('🐘 Postgres connected'));
//exporting the pool variable
module.exports = pool;
