import { GraphQLInt } from 'graphql';
import cartType from '../types/cart';
import { updateProductQuantityToCart } from '../../repositories/cartsRepository';

const UpdateProductQuantityToCart = {
  type: cartType,
  description: 'Update item quantity to cart',
  args: {
    productId: {
      type: GraphQLInt,
    },
    cartId: {
      type: GraphQLInt,
    },
    quantity: {
      type: GraphQLInt,
    },
  },
  resolve: (_: any, args: any) =>
    updateProductQuantityToCart({
      productId: args.productId,
      cartId: args.cartId,
      quantity: args.quantity,
    }),
};

export default UpdateProductQuantityToCart;
