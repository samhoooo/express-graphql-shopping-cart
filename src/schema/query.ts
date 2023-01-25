import { GraphQLObjectType } from 'graphql';
import cartById from './queries/cartById';
import productById from './queries/productById';
import productByName from './queries/productByName';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    cartById,
    productById,
    productByName,
  }),
});

export default RootQueryType;
