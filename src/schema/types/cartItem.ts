import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import ProductType from './product';
import { getProductById } from '../../repositories/productsRepository';

const CartItemType = new GraphQLObjectType({
  name: 'CartItem',
  description: 'This represents a single item of a cart',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    product: {
      type: ProductType,
      resolve: (cartItem) => {
        return getProductById({ id: cartItem.productId });
      },
    },
    quantity: {
      type: GraphQLInt,
    },
  }),
});

export default CartItemType;
