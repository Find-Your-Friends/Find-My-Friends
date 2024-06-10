/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.string("email").notNullable();
    table.string("full_name").notNullable();
    table.integer("age");
    table.string("gender");
    table.string("location");
    table.string("profile_pic");
    table.string("expectation");
    table.string("hobbies");
    table.string("preferred_group_size");
    table.string("frequency_of_socialising");
    table.string("personality_type");
    table.string("gender_preference");
    table.string("ice_breaker_question");
    table.string("a_secret");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");
