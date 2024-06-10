const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Clear the tables
  await knex("users").del();

  // Reset the ID sequences
  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");

  // Create users
  const user1 = await User.create(
    "cool_cat",
    "1234",
    "asd@gmail.com",
    "Cool Cat",
    23,
    "Female",
    "NYC",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "Friendship",
    "Music, Traveling",
    "Small",
    "Often",
    "Extrovert",
    "Any",
    "Friendly, Outgoing",
    "I'm actually afraid of the dark, even though I'm an adult."
  );

  const user2 = await User.create(
    "l33t-guy",
    "1234",
    "leetguy@yahoo.com",
    "Leet Guy",
    19,
    "Male",
    "SLC",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "Networking",
    "Coding, Gaming",
    "Medium",
    "Sometimes",
    "Introvert",
    "Any",
    "Analytical, Thoughtful",
    "I have a hidden talent for singing, but I never sing in front of others because I'm too shy."
  );

  const user3 = await User.create(
    "wowow",
    "1234",
    "wowow@outlook.com",
    "Wow Wow",
    29,
    "Male",
    "Portland",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "Romance",
    "Film Making, Cooking",
    "Large",
    "Rarely",
    "Ambivert",
    "Female",
    "Creative, Empathetic",
    "I once accidentally crashed my neighbor's car and never told anyone."
  );
};
