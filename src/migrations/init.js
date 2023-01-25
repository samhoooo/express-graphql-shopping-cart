/**
 * Migration to initialize database - create two tables with relationships between them.
 *
 * Command:
 * ./node_modules/.bin/knex migrate:make init -x ts --connection localhost --client mysql2 --migrations-directory ./src/migrations/
 *
 * @see https://knexjs.org/#Migrations-CLI
 * @param knex
 */
async function up(knex) {
  return knex.schema
    .createTable('cart', (cart) => {
      cart.increments('id').primary();
    })
    .createTable('cartItem', (cartItem) => {
      cartItem.increments('id').primary();
      cartItem.integer('productId').notNullable();
      cartItem.integer('cartId').notNullable();
      cartItem.integer('quantity').notNullable();
    })
    .createTable('product', (product) => {
      product.increments('id').primary();
      product.string('name').notNullable();
      product.float('price', 14, 10).notNullable();
    });
}

async function down(knex) {
  return knex.schema
    .dropTable('cartItem')
    .dropTable('cart')
    .dropTable('product');
}

module.exports = {
  up,
  down,
};
