const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const supabase = require('../config/supabaseClient');
const { createUser, getUserByUsername } = require('../models/UserModel');
const { getAccountByUserId } = require('../models/AccountModel');


const register = async (req, res) => {
  try {
    const { username,  password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
     await supabase.createUser({
      username: username,
      password: password,
    });


    // Create a new user
    const user = await createUser(username,  hashedPassword);

    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get the user by email
    const user = await getUserByUsername(username);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };