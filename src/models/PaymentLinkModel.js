const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

class PaymentLinkModel {
  async create(userId) {
    const uniqueLink = uuidv4();
    const query = `
        INSERT INTO payment_links (user_id, unique_link)
        VALUES ('${userId}', '${uniqueLink}')`;

    try {
      await pool.query(query);
      return "Payment link created successfully";
    } catch (err) {
      console.error("Error creating payment link:", err);
      throw err;
    }
  }
  async findByUserId(userId) {
    const query = `
      SELECT id, user_id, unique_link
      FROM payment_links
      WHERE user_id = '${userId}'`;

    try {
      const { rows } = await pool.query(query);
      return rows[0];
    } catch (err) {
      console.error("Error finding payment link:", err);
      throw err;
    }
  }
}

module.exports = new PaymentLinkModel();
