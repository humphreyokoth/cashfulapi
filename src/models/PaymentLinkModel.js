const supabase = require('../config/supabaseClient');
const { generateUniqueLink } = require('../utils/generateUniqueLink');

const createPaymentLink = async (userId, accountId) => {
  const uniqueLink = generateUniqueLink();

  const { data, error } = await supabase
    .from('payment_links')
    .insert([{ user_id: userId, account_id: accountId, unique_link: uniqueLink }]);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

const getPaymentLinkByUserId = async (userId) => {
  const { data, error } = await supabase
    .from('payment_links')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = { createPaymentLink, getPaymentLinkByUserId };