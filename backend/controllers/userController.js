// controllers/userController.js
const bcrypt = require('bcrypt');
const { User } = require('../models');

const saltRounds = 10;

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { username, email, phonenumber, password } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    const newUser = await User.create({
      username,
      email,
      phonenumber,
      password: hashedPassword
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Authenticate a user
const authenticateUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check the password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Authenticated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  authenticateUser
};
