const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/:userId', accountController.getAccountData);

module.exports = router;