/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cart')
    .del()
    .then(() => {
      return knex('cart').insert([{ id: 1 }]);
    });
  await knex('cartItem')
    .del()
    .then(() => {
      return knex('cartItem').insert([
        { id: 1, productId: 1, cartId: 1, quantity: 1 },
        { id: 2, productId: 2, cartId: 1, quantity: 3 },
        { id: 3, productId: 3, cartId: 1, quantity: 5 },
      ]);
    });
  await knex('product')
    .del()
    .then(() => {
      return knex('product').insert([
        { id: 1, name: 'Toilet Paper', price: 3.5 },
        { id: 2, name: 'Rice Pudding', price: 1.5 },
        { id: 3, name: 'Claire Oysters', price: 7.5 },
      ]);
    });
}

module.exports = {
  seed,
};
