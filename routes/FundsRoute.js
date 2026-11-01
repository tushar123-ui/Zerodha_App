const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// EXACT FIX: Yahan se curly brackets { } hata diye hain!
const UserModel = require("../model/UserModel");

router.get("/get-funds", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id || req.user._id; 
    
    const user = await UserModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found in database" });
    }

    res.json({ 
      success: true, 
      availableBalance: user.availableBalance || 0, 
      usedMargin: user.usedMargin || 0 
    });
  } catch (error) {
    console.error("💥 GET FUNDS ERROR:", error);
    res.status(500).json({ success: false, message: "Server error fetching funds" });
  }
});

router.post("/update-funds", authMiddleware, async (req, res) => {
  try {
    const { amount, type } = req.body; 
    const userId = req.user.id || req.user._id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found in database" });
    }

    if (type === 'ADD') {
      user.availableBalance = (user.availableBalance || 0) + Number(amount);
    } else if (type === 'WITHDRAW') {
      if ((user.availableBalance || 0) < Number(amount)) {
        return res.status(400).json({ success: false, message: "Insufficient balance to withdraw" });
      }
      user.availableBalance -= Number(amount);
    } else {
      return res.status(400).json({ success: false, message: "Invalid transaction type" });
    }

    await user.save();

    res.json({ 
      success: true, 
      message: `Funds ${type === 'ADD' ? 'added' : 'withdrawn'} successfully`,
      availableBalance: user.availableBalance 
    });

  } catch (error) {
    console.error("💥 UPDATE FUNDS ERROR:", error);
    res.status(500).json({ success: false, message: "Server error updating funds" });
  }
});

module.exports = router;