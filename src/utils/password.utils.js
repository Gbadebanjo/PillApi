const bcrypt = require("bcryptjs");

const hashPassword = async (plaintextPassword) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(plaintextPassword, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

const comparePasswords = async (plaintextPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
  
    return result;
  }

  function generateRandomOTP(length) {
    const characters = "0123456789";
    let result = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
  
    return result;
  }

module.exports = {
    hashPassword,
    comparePasswords,
    generateRandomString,
    generateRandomOTP
}