const pool = require('./lib/utils/pool');
const setup = require('./data/setup');
//here our pool object and setup function are actually combined
setup(pool)
  .catch((err) => console.error(err))
  .finally(() => process.exit());
