const supabase = require('../config/supabaseClient');

const createUser = async (username, password) => {
  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password }]);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};

const getUserByUsername = async (username) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = { createUser, getUserByUsername };