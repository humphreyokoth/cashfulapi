const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { create, getUserByUsername } = require("../models/AuthModel");
const { generateToken ,verifyToken} = require("../utils/jwtUtils");

const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("Password:", password);
    const saltRounds = 6;
    const salt = await bcrypt.genSalt(saltRounds);
    console.log("Salt:", salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await create(username, hashedPassword);
    const token = generateToken(user.id);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  const { username,password } = req.body;

  try {
    const user = await getUserByUsername(username);
    console.log("user:", user);
    console.log("User Password:", user.password);

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = generateToken(user.id);

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
