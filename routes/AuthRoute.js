const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "zerodha_super_secret_key";

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    
    // ==========================================
    // 🛡️ STRONG BACKEND VALIDATIONS START
    // ==========================================

    // 1. Koi field khali na ho (Empty check)
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required!", success: false });
    }

    // 2. Email ka format bilkul sahi hona chahiye (Regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format!", success: false });
    }

    // 3. Username kam se kam 3 characters ka hona chahiye (Length check)
    if (username.trim().length < 3) {
      return res.status(400).json({ message: "Username must be at least 3 characters long!", success: false });
    }

    // 4. Password kam se kam 6 characters ka hona chahiye (Security check)
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long!", success: false });
    }

    // ==========================================
    // 🛡️ STRONG BACKEND VALIDATIONS END
    // ==========================================


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



router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation check
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!", success: false });
    }

    // 2. Check karein user database me hai ya nahi
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password!", success: false });
    }

    // 3. Password match karein (Bcrypt compare)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Incorrect email or password!", success: false });
    }

    // 4. Sab sahi hone par Token generate karein
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true, secure: false });

    res.status(200).json({ message: "Login successful", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
});


router.post("/me", async (req, res) => {
  try {
    const token = req.cookies.token; 
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const verifiedData = jwt.verify(token, JWT_SECRET);
    
    const user = await User.findById(verifiedData.id);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, username: user.username, email: user.email });
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
});

module.exports = router;