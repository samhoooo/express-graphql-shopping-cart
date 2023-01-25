// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgresql',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 5432,
    database: process.env.DATABASE_NAME || 'shopping-cart',
    user: process.env.DATABASE_USER || 'sam-ho',
    password: process.env.DATABASE_PASSWORD || '',
  },
  migrations: {
    directory: './src/migrations',
  },
  seeds: {
    directory: './src/seeds',
  },
};
