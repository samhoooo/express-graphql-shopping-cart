import database from '../database';

export const getProductById = async (params: { id: number }) => {
  const { id } = params;
  if (id == null) return null;
  return await database.select().from('product').where('id', id).first();
};

export const getProductByName = async (params: { name: string }) => {
  const { name } = params;
  if (name == null) return null;
  return await database.select().from('product').where('name', name).first();
};
