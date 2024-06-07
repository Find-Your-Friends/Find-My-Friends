const knex = require("../knex");

class AdditionalInfo {
  // List all additional information entries
  static async list() {
    return await knex("additional_info").select();
  }

  // Find additional information by id
  static async find(id) {
    const additionalInfo = await knex("additional_info").where({ id }).first();
    return additionalInfo || null;
  }

  // Create a new additional information entry
  static async create({
    wants,
    interests,
    hobbies,
    preferred_group_size,
    types_of_events,
    frequency_of_socialising,
    personality_type,
    gender_preference,
    personality_traits,
    values,
    beliefs,
  }) {
    // Ensure required parameters are provided
    if (!user_id || !wants) {
      throw new Error("Missing required fields: user_id or wants");
    }

    const [additionalInfo] = await knex("additional_info")
      .insert({
        user_id,
        wants,
        interests,
        hobbies,
        preferred_group_size,
        types_of_events,
        frequency_of_socialising,
        personality_type,
        gender_preference,
        personality_traits,
        values,
        beliefs,
      })
      .returning("*");

    if (!additionalInfo) {
      throw new Error("Additional information creation failed");
    }

    return additionalInfo;
  }
}

module.exports = AdditionalInfo;
