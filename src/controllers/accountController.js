const { createAccount, getAccountByUserId } = require('../models/AccountModel');

const createUserAccount = async (req, res) => {
  try {
    const { userId, accountName, accountNumber, accountBalance } = req.body;

    const account = await createAccount(userId, accountName, accountNumber, accountBalance);

    res.status(201).json({ account });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAccountData = async (req, res) => {
  try {
    const { userId } = req.params;

    const accounts = await getAccountByUserId(userId);

    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUserAccount, getAccountData };