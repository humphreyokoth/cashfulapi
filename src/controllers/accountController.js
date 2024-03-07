// const Account = require('../models/AccountModel');

// exports.getAccountByUserId = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const account = await Account.findByUserId(userId);
//     res.json(account);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const Account = require("../models/AccountModel");
const {
  createAccount,
  getAccountByUsername,
} = require("../models/AccountModel");

createUserAccount = async (req, res) => {
  const { userId, accountName, accountNumber, accountBalance } = req.body;
  try {
    // const { userId, accountName, accountNumber, accountBalance } = req.body;
    const newAccount = await createAccount(
      userId,
      accountName,
      accountNumber,
      accountBalance
    );
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getAccountData = async (req, res) => {
  const { userId } = req.params;

  try {
    const account = await getAccountByUsername(userId);

    if (!account) {
      return res.status(404).json({ error: "Account not found" });
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createUserAccount,
  getAccountData,
};
