const app = require('./lib/app');
const pool = require('./lib/utils/pool');
//our app and pool are imported here, and below our env variable are assigned to
//shortened variable names
const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;
//app.listen function binds our app to a specific port (determined by our env
//variables in this instance) and prints a message telling us the URL we can use to
//access our express server
app.listen(PORT, () => {
  console.log(`🚀  Server started on ${API_URL}:${PORT}`);
});
//looks like this prints when the server is shut down, but can't quite remember :)
process.on('exit', () => {
  console.log('👋  Goodbye!');
  pool.end();
});
