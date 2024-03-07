const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentContoller');

router.post('/create', paymentController.createPayment);
router.get('/:paymentLinkId', paymentController.getPaymentsByPaymentLinkId);

module.exports = router;