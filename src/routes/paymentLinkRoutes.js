const express = require('express');
const router = express.Router();
const paymentLinkController = require('../controllers/paymentLinkController');

router.post('/generate', paymentLinkController.generateUniqueLink);
router.get('/:userId', paymentLinkController.getPaymentLinkByUserId);

module.exports = router;