const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    // Browser ki cookie se token nikal rahe hain
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized! Please login first." });
    }

    // Token ko decode karke User ki details (ID) nikal rahe hain
    // Dhyan rakhein: JWT_SECRET wahi hona chahiye jo AuthRoute me token banate waqt use hua tha
    const verifiedData = jwt.verify(token, process.env.JWT_SECRET || "zerodha_super_secret_key");
    
    // User ki details ko request object me daal diya taaki aage API me use ho sake
    req.user = verifiedData; 
    
    next(); // Security check pass, API run karne do
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;