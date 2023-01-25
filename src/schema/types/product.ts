import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'This represents a single product',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
  }),
});

export default ProductType;
