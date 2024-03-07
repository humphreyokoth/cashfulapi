const Payment = require('../models/PaymentModel');

exports.createPayment = async (req, res) => {
  try {
    const { paymentLinkId, customerName, customerEmail, amount, paymentStatus } = req.body;
    const newPayment = await Payment.create(paymentLinkId, customerName, customerEmail, amount, paymentStatus);
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPaymentsByPaymentLinkId = async (req, res) => {
  try {
    const { paymentLinkId } = req.params;
    const payments = await Payment.findByPaymentLinkId(paymentLinkId);
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};