import { GraphQLString } from 'graphql';
import productType from '../types/product';
import { getProductByName } from '../../repositories/productsRepository';

const ProductByName = {
  type: productType,
  description: 'Get product by Name',
  args: {
    name: {
      type: GraphQLString,
    },
  },
  resolve: (_: any, args: any) => getProductByName({ name: args.name }),
};

export default ProductByName;
