import { GraphQLInt } from 'graphql';
import cartType from '../types/cart';
import { addProductToCart } from '../../repositories/cartsRepository';

const AddProductToCart = {
  type: cartType,
  description: 'Add a product to cart',
  args: {
    productId: {
      type: GraphQLInt,
    },
    cartId: {
      type: GraphQLInt,
    },
  },
  resolve: (_: any, args: { productId: number; cartId: number }) =>
    addProductToCart({ productId: args.productId, cartId: args.cartId }),
};

export default AddProductToCart;
