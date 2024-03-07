const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET ;
  const token = jwt.sign({ userId }, secret, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET ;
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};