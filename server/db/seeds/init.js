const User = require('../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  await User.create('cool_cat', '1234', 'asd@gmail.com', "Cool Cat");
  await User.create('l33t-guy', '1234', 'leetguy@yahoo.com', "Leet Guy");
  await User.create('wowow', '1234', 'wowow@outlook.com', "Wow Wow");
};
