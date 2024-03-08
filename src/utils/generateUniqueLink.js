const { v4: uuidv4 } = require('uuid');

const generateUniqueLink = () => {
  const baseUrl = 'http://localhost:4000/payment/';
  const uniqueLink = `${baseUrl}${uuidv4()}`;
  return uniqueLink;
};

module.exports = { generateUniqueLink };
