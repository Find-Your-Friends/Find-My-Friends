const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class Post {
  static async create(
    user_id,
    picture,
    username,
    location,
    time,
    date,
    group_size,
    title,
    description,
    gender_preference,
    active = true
  ) {
    if (
      !picture ||
      !location ||
      !time ||
      !date ||
      !group_size ||
      !title ||
      !description ||
      !gender_preference
    ) {
      throw new Error("All fields must be filled");
    }
    const query = `INSERT INTO posts (user_id, picture, username, location, time, date, group_size, title, description, gender_preference, active)
    VALUES (?,?,?,?,?,?,?,?,?,?,?) RETURNING *`;
    const { rows } = await knex.raw(query, [
      user_id,
      picture,
      username,
      location,
      time,
      date,
      group_size,
      title,
      description,
      gender_preference,
      active,
    ]);

    if (rows.length === 0) {
      throw new Error("Post creation failed");
    }

    return rows[0];
  }

  static async listAllPost() {
    const query = `SELECT * FROM posts`;
    const { rows } = await knew.raw(query);
    return rows;
  }

  
  static async findByUser(userId) {
    return knex("posts").where({ user_id: userId });
  }

  static async updateActiveStatus() {
    const query = `
    UPDATE posts 
    SET active = false 
    WHERE (date || ' ' || time)::timestamp < NOW() AND active = true
    RETURNING *;
    
    `;
    const { rows } = await knex.raw(query);
    return rows;
  }

  static async deletePost(postId) {
    return knex("posts").where({ id: postId }).del();
  }
}

module.exports = Post;
