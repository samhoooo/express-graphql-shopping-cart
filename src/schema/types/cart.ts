import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import CartItemType from './cartItem';
import { getItemsOfCartById } from '../../repositories/cartsRepository';

const CartType = new GraphQLObjectType({
  name: 'cart',
  description: 'This represents a single cart',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    items: {
      type: new GraphQLList(CartItemType),
      resolve: (cart) => {
        return getItemsOfCartById({ cartId: cart.id });
      },
    },
  }),
});

export default CartType;
