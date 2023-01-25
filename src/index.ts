import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import config from './config';
import database from './database';

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

try {
  if ('migrations' in config.database) {
    database.migrate.latest({
      directory: config.database.migrations.directory,
    });
  }

  app.listen(config.port, () => {
    console.log(`Server started at http://localhost:${config.port}`);
  });
} catch (error) {
  process.exit(1);
}
