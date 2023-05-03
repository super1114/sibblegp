module.exports = {
    client: 'pg',
    connection:
      process.env.DATABASE_URL ||
      'postgres://postgres:root@localhost:5432/due-diligence',
    migrations: {
      directory: './pages/api/knex/migrations',
    },
    seeds: {
      directory: './knex/seeds',
    },
  }
  