const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './src/db.sqllite3.db',
  },
});

module.exports = knex;
