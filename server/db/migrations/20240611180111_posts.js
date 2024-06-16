/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
    table.string("picture").notNullable();
    table.string("username").notNullable();
    table.string("location").notNullable();
    table.string("time").notNullable();
    table.date("date").notNullable();
    table.integer("group_size").notNullable();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("gender_preference");
    table.boolean("active").defaultTo(true);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("posts");
