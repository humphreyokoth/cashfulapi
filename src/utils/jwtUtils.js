const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET ;
  const token = jwt.sign({ userId }, secret, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  // console.log("JWT Secret:", process.env.JWT_SECRET);

  const secret = process.env.JWT_SECRET;

  try {
    const decoded = jwt.verify(token.toString(), secret);
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error.message);
    throw new Error('Invalid token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};