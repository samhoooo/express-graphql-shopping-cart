import { GraphQLInt } from 'graphql';
import cartType from '../types/cart';
import { removeProductFromCart } from '../../repositories/cartsRepository';

const RemoveProductFromCart = {
  type: cartType,
  description: 'Remove a product to cart',
  args: {
    productId: {
      type: GraphQLInt,
    },
    cartId: {
      type: GraphQLInt,
    },
  },
  resolve: (_: any, args: any) =>
    removeProductFromCart({ productId: args.productId, cartId: args.cartId }),
};

export default RemoveProductFromCart;
