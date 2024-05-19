const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex("users").del();

  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");

  await User.create(
    "cool_cat",
    "1234",
    "asd@gmail.com",
    "Cool Cat",
    23,
    "Female",
    "NYC",
    "Male",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );
  await User.create(
    "l33t-guy",
    "1234",
    "leetguy@yahoo.com",
    "Leet Guy",
    19,
    "Male",
    "SLC",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );
  await User.create(
    "wowow",
    "1234",
    "wowow@outlook.com",
    "Wow Wow",
    29,
    "Male",
    "Portland",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );
};
