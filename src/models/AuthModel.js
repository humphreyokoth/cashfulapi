const pool = require("../config/db");

class AuthModel {
  async create(username, password) {
    const query = `
        INSERT INTO users (username, password)
        VALUES ('${username}', '${password}')`;

    try {
      await pool.query(query);
      return "User created successfully";
    } catch (err) {
      console.error("Error creating user:", err);
      throw err;
    }
  }

  async getUserByUsername(username) {
  const query = `
    SELECT id, username, password
    FROM users
    WHERE username = '${username}'`;

  try {
    const { rows } = await pool.query(query);
    return rows[0];
  } catch (err) {
    console.error("Error finding user:", err);
    throw err;
  }
}

}
module.exports = new AuthModel();
