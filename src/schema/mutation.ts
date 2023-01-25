import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';
import addProductToCart from './mutations/addProductToCart';
import removeProductFromCart from './mutations/removeProductFromCart';
import updateProductQuantityToCart from './mutations/updateProductQuantityToCart';

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addProductToCart,
    removeProductFromCart,
    updateProductQuantityToCart,
  }),
});

export default RootMutationType;
