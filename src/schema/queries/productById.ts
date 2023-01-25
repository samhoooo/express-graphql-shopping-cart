import { GraphQLInt } from 'graphql';
import productType from '../types/product';
import { getProductById } from '../../repositories/productsRepository';

const ProductById = {
  type: productType,
  description: 'Get product by ID',
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (_: any, args: any) => getProductById({ id: args.id }),
};

export default ProductById;
