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


const { getAccountByUsername } = require('../models/AccountModel');

const getAccountData = async (req, res) => {
  const { username } = req.params;

  try {
    const account = await getAccountByUsername(username);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAccountData,
};