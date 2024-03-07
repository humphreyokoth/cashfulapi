const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');


router.post('/create-account', accountController.createUserAccount);
router.get('/:userId', accountController.getAccountData);

module.exports = router;