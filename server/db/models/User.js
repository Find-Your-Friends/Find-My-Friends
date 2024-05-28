const knex = require("../knex");
const authUtils = require("../../utils/auth-utils");

class User {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Instead, it is used by each of the User static methods to hide the hashed
  // password of users before sending user data to the client. Since #passwordHash
  // is private, only the isValidPassword instance method can access that value.
  constructor({
    id,
    username,
    password_hash,
    email,
    full_name,
    age,
    gender,
    location,
    profile_pic,
  }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.email = email;
    this.full_name = full_name;
    this.age = age;
    this.gender = gender;
    this.location = location;
    this.profile_pic = profile_pic;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password.
  isValidPassword = async (password) =>
    authUtils.isValidPassword(password, this.#passwordHash);

  static async list() {
    const query = `SELECT * FROM users`;
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = `SELECT * FROM users WHERE id = ?`;
    const { rows } = await knex.raw(query, [id]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = `SELECT * FROM users WHERE username = ?`;
    const { rows } = await knex.raw(query, [username]);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async create(
    username,
    password,
    email,
    full_name="",
    age = null,
    gender = null,
    location = null,
    profile_pic = null
  ) {
    console.log("Parameters:", {
      username,
      password,
      email,
      full_name,
      age,
      gender,
      location,
      profile_pic,
    });

    // Ensure all required parameters are provided
    if (!username || !password || !email) {
      throw new Error("Missing required fields: username, password, or email");
    }

    // Hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    // full_name = full_name === "" ? null : full_name;

    const query = `INSERT INTO users (username, password_hash, email, full_name, age, gender, location, profile_pic)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING *`;
    const { rows } = await knex.raw(query, [
      username,
      passwordHash,
      email,
      full_name,
      age,
      gender,
      location,
      profile_pic,
    ]);

    if (rows.length === 0) {
      throw new Error("User creation failed");
    }

    const user = rows[0];
    return new User(user);
  }
  // this is an instance method that we can use to update
  static async update(id, username) {
    // dynamic queries are easier if you add more properties
    const query = `
      UPDATE users
      SET username=?
      WHERE id=?
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [username, id]);
    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  }

  static async updateAdditionalInformation(id, age, gender, location) {
    // dynamic queries are easier if you add more properties
    const query = `
      UPDATE users
      SET age = ?, gender = ?, location = ?
      WHERE id=?
      RETURNING *
    `;
    const { rows } = await knex.raw(query, [age, gender, location, id]);
    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  }

  static async deleteAll() {
    return knex("users").del();
  }
}

module.exports = User;
