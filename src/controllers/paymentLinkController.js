const { createPaymentLink, getPaymentLinkByUserId } = require('../models/PaymentLinkModel');

const generatePaymentLink = async (req, res) => {
  try {
    const { userId, accountId } = req.body;

    const paymentLink = await createPaymentLink(userId, accountId);

    res.status(201).json({ paymentLink });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPaymentLinkByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;

    const paymentLinks = await getPaymentLinkByUserId(userId);

    res.json(paymentLinks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { generatePaymentLink, getPaymentLinkByUserIdController };