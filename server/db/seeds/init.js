const User = require("../models/User");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Clear the tables
  await knex("posts").del();
  await knex("users").del();

  // Reset the ID sequences
  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1");
  await knex.raw("ALTER SEQUENCE posts_id_seq RESTART WITH 1");

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

  const users = await knex("users").select("id", "username");

  await knex('posts').insert([
    {
      user_id: users.find(user => user.username === "cool_cat").id,
      picture: "https://example.com/photo1.jpg",
      username: "cool_cat",
      location: "Central Park, NYC",
      time: "12:00:00",
      date: "2024-06-11",
      group_size: 3,
      title: "Picnic in the Park",
      description: "Join me for a fun picnic in Central Park. Bring your own snacks!",
      gender_preference: "Any",
      active: true,
    },
    {
      user_id: users.find(user => user.username === "l33t-guy").id,
      picture: "https://example.com/photo2.jpg",
      username: "l33t-guy",
      location: "Tech Hub, SLC",
      time: "18:00:00",
      date: "2024-06-12",
      group_size: 5,
      title: "Coding Workshop",
      description: "Come join our coding workshop for beginners. Laptops provided.",
      gender_preference: "Any",
      active: true,
    },
    {
      user_id: users.find(user => user.username === "wowow").id,
      picture: "https://example.com/photo3.jpg",
      username: "wowow",
      location: "City Square, Portland",
      time: "14:00:00",
      date: "2024-06-13",
      group_size: 10,
      title: "Film Making Meetup",
      description: "A meetup for aspiring filmmakers. Let's share ideas and collaborate!",
      gender_preference: "Female",
      active: true,
    }
  ]);

  
};
