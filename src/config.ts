export default {
  database: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME || 'shopping-cart',
      user: process.env.DATABASE_USER || 'sam-ho',
      password: process.env.DATABASE_PASSWORD || '',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  port: 5000,
};
