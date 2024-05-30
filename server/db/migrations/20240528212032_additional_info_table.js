/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("additional_info", (table) => {
        table.increments();
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.string("wants").notNullable();
        table.string("interests");
        table.string("hobbies");
        table.string("preferred_group_size");
        table.string("types_of_events");
        table.string("frequency_of_socialising");
        table.string("personality_type");
        table.string("gender_preference");
        table.string("personality_traits");
        table.string("values");
        table.string("beliefs");

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("additional_info")
};
