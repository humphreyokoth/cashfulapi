const pool = require('../config/db');

class PaymentModel {
  
  async  create(paymentLinkId, customerName, customerEmail, amount, paymentStatus) {
    const query = `
        INSERT INTO payments (payment_link_id, customer_name, customer_email, amount, payment_status)
        VALUES ('${paymentLinkId}', '${customerName}', '${customerEmail}', ${amount}, '${paymentStatus}')`;
    
    try {
        await pool.query(query);
        return 'Payment created successfully';
    } catch (err) {
        console.error('Error creating payment:', err);
        throw err;
    }
}


async findByPaymentLinkId(paymentLinkId) {
  const query = `
      SELECT id, payment_link_id, customer_name, customer_email, amount, payment_status
      FROM payments
      WHERE payment_link_id = '${paymentLinkId}'`;
  
  try {
      const { rows } = await pool.query(query);
      return rows;
  } catch (err) {
      console.error('Error finding payments:', err);
      throw err;
  }
}

}

module.exports = new PaymentModel();