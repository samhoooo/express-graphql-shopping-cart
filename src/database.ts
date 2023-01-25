import { knex } from 'knex';
import config from './config';

const database = knex({
  ...config.database,
});

export default database;
