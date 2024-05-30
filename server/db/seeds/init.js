const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Clear the tables
  await knex("additional_info").del();
  await knex("users").del();

  // Reset the ID sequences
  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE additional_info_id_seq RESTART WITH 1");

  // Create users
  const user1 = await User.create(
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
  const user2 = await User.create(
    "l33t-guy",
    "1234",
    "leetguy@yahoo.com",
    "Leet Guy",
    19,
    "Male",
    "SLC",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );
  const user3 = await User.create(
    "wowow",
    "1234",
    "wowow@outlook.com",
    "Wow Wow",
    29,
    "Male",
    "Portland",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );

  // Insert additional info for each user
  await knex("additional_info").insert([
    {
      user_id: user1.id,
      wants: "Friendship",
      interests: "Music, Traveling",
      hobbies: "Playing Guitar, Hiking",
      preferred_group_size: "Small",
      types_of_events: "Concerts, Outdoor Activities",
      frequency_of_socialising: "Often",
      personality_type: "Extrovert",
      gender_preference: "Any",
      personality_traits: "Friendly, Outgoing",
      values: "Honesty, Loyalty",
      beliefs: "Agnostic",
    },
    {
      user_id: user2.id,
      wants: "Networking",
      interests: "Coding, Gaming",
      hobbies: "Programming, Chess",
      preferred_group_size: "Medium",
      types_of_events: "Tech Meetups, Esports",
      frequency_of_socialising: "Sometimes",
      personality_type: "Introvert",
      gender_preference: "Any",
      personality_traits: "Analytical, Thoughtful",
      values: "Innovation, Integrity",
      beliefs: "Atheist",
    },
    {
      user_id: user3.id,
      wants: "Romance",
      interests: "Movies, Cooking",
      hobbies: "Film Making, Cooking",
      preferred_group_size: "Large",
      types_of_events: "Movie Nights, Cooking Classes",
      frequency_of_socialising: "Rarely",
      personality_type: "Ambivert",
      gender_preference: "Female",
      personality_traits: "Creative, Empathetic",
      values: "Creativity, Compassion",
      beliefs: "Spiritual",
    },
  ]);
};
