const pool = require('../config/db');

class AccountModel {


      async createAccount(userId, accountName, accountNumber, accountBalance) {
        const query = `
          INSERT INTO accounts (user_id, account_name, account_number, account_balance)
          VALUES ($1, $2, $3, $4)
          RETURNING *`;
      
        const values = [userId, accountName, accountNumber, accountBalance];
      
        try {
          const { rows } = await pool.query(query, values);
          return rows[0];
        } catch (err) {
          console.error('Error creating account:', err);
          throw err;
        }
      }
      
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