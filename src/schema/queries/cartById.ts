import { GraphQLInt } from 'graphql';
import CartType from '../types/cart';
import { getCartById } from '../../repositories/cartsRepository';

const CartById = {
  type: CartType,
  description: 'Get cart by ID',
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (_: any, args: any) => getCartById({ cartId: args.id }),
};

export default CartById;
