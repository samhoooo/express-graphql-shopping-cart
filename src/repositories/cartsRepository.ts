import database from '../database';

export const getItemsOfCartById = async (params: { cartId: number }) => {
  const { cartId } = params;
  return await database.select().from('cartItem').where('cartId', cartId);
};

export const getCartById = async (params: { cartId: number }) => {
  const { cartId } = params;
  return await database.select().from('cart').where('id', cartId).first();
};

export const updateProductQuantityToCart = async (params: {
  cartId: number;
  productId: number;
  quantity: number;
}) => {
  const { cartId, productId, quantity } = params;
  return await database
    .select()
    .from('cartItem')
    .where('cartId', cartId)
    .where('productId', productId)
    .then(async ([row]) => {
      if (!row) {
        console.log('select id do not exist');
        return null;
      }
      await database
        .update('quantity', quantity)
        .from('cartItem')
        .where('id', row.id);

      return getCartById({ cartId });
    });
};

export const addProductToCart = async (params: {
  cartId: number;
  productId: number;
}) => {
  const { cartId, productId } = params;

  const lastCartItem = await database
    .select()
    .from('cartItem')
    .where('cartId', cartId)
    .orderBy('id', 'desc')
    .first();

  const newId = lastCartItem.id + 1;

  const existingCartItemWithSameProduct = await database
    .select()
    .from('cartItem')
    .where('productId', productId)
    .first();

  if (existingCartItemWithSameProduct != null) {
    return updateProductQuantityToCart({
      cartId,
      productId,
      quantity: existingCartItemWithSameProduct.quantity + 1,
    });
  }

  return await database
    .insert({
      cartId: cartId,
      id: newId,
      productId: productId,
      quantity: 1,
    })
    .into('cartItem')
    .then(() => {
      return getCartById({ cartId });
    });
};

export const removeProductFromCart = async (params: {
  cartId: number;
  productId: number;
}) => {
  const { cartId, productId } = params;

  await database
    .del()
    .from('cartItem')
    .where('cartId', cartId)
    .where('productId', productId);

  return getCartById({ cartId });
};
