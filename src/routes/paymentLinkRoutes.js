const express = require('express');
const router = express.Router();
const { generatePaymentLink, getPaymentLinkByUserIdController } = require('../controllers/paymentLinkController');

module.exports = (supabase) => {
  router.post('/generate', (req, res) => generatePaymentLink(req, res, supabase));
  router.get('/:userId', (req, res) => getPaymentLinkByUserIdController(req, res, supabase));

  return router;
};