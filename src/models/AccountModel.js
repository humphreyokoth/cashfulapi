const supabase = require('../config/supabaseClient');

const createAccount = async (userId, accountName, accountNumber, accountBalance) => {
  const { data, error } = await supabase
    .from('accounts')
    .insert([{ user_id: userId, account_name: accountName, account_number: accountNumber, account_balance: accountBalance }]);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

const getAccountByUserId = async (userId) => {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = { createAccount, getAccountByUserId };