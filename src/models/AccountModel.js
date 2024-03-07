const pool = require('../config/db');

class AccountModel {
  async getAccountByUsername(userId) {
    const query = `
        SELECT account_name, account_number, account_balance
        FROM accounts
        WHERE user_id = '${userId}'`;
    
    try {
        const { rows } = await pool.query(query);
        return rows[0];
    } catch (err) {
        console.error('Error finding account:', err);
        throw err;
    }
}

}

module.exports = new AccountModel();