const express = require('express');
const router = express.Router();
const { createUserAccount, getAccountData } = require('../controllers/accountController');

module.exports = (supabase) => {
  router.post('/create', (req, res) => createUserAccount(req, res, supabase));
  router.get('/:userId', (req, res) => getAccountData(req, res, supabase));

  return router;
};