const PaymentLink = require('../models/PaymentLinkModel');

// exports.generatePaymentLink = async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const paymentLink = await PaymentLink.create(userId);
//     res.json(paymentLink);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const getPaymentLinkByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const paymentLink = await PaymentLink.findByUserId(userId);
    res.json(paymentLink);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const generateUniqueLink = (paymentId) => {
  const baseUrl = '';
  const uniqueLink = `${baseUrl}${paymentId}`;
  return uniqueLink;
};

module.exports = {
  getPaymentLinkByUserId,
  generateUniqueLink,
};