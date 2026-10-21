const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "zerodha_super_secret_key";

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    
    // Check karein ki user pehle se to nahi hai
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    // Password ko secure (hash) karna
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Naya user database mein save karna
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    
    // JWT Token (Cookie) generate karna taaki user login ho jaye
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true, secure: false });
    
    res.status(201).json({ message: "Account created successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
});

module.exports = router;