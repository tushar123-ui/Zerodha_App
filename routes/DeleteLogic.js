const jwt = require("jsonwebtoken");
const User = require("../model/UserModel"); // Apna User model ka path check kar lein

const JWT_SECRET = process.env.JWT_SECRET || "zerodha_super_secret_key";

const deleteAccountLogic = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

    const verifiedData = jwt.verify(token, JWT_SECRET);

    // Database se user uda dena
    const deletedUser = await User.findByIdAndDelete(verifiedData.id);
    if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" });

    // Cookie hatana taaki logout ho jaye
    res.clearCookie("token");
    
    res.status(200).json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Function ko export kar rahe hain taaki AuthRoute me use kar sakein
module.exports = { deleteAccountLogic };