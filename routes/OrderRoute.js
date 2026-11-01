const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Models Import (Check kar lena ki HoldingsModel aur OrdersModel aapke paas {} me export huye hain ya direct. Agar direct hain toh {} hata dena)
const UserModel = require("../model/UserModel");
const { HoldingSchema } = require("../schema/HoldingSchema"); 
const { OrdersSchema } = require("../schema/OrdersSchema"); 
const mongoose = require("mongoose");

// Mongoose models (Direct schema se model bana rahe hain taaki koi import error na aaye)
const Holding = mongoose.models.Holding || mongoose.model("Holding", HoldingSchema);
const Order = mongoose.models.Order || mongoose.model("Order", OrdersSchema);


// 1. PLACE ORDER (BUY / SELL LOGIC)
router.post("/place-order", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user.id || req.user._id;

    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const totalAmount = Number(qty) * Number(price);

    if (mode === "BUY") {
      // Balance Check
      if (user.availableBalance < totalAmount) {
        return res.status(400).json({ success: false, message: "Insufficient Funds to Buy!" });
      }
      
      // Paise kaato
      user.availableBalance -= totalAmount;
      await user.save();

      // Holding me add karo ya update karo
      let existingHolding = await Holding.findOne({ user: userId, name: name });
      if (existingHolding) {
        // Purani holding hai, toh average cost nikalenge
        // YAHAN FIX KIYA HAI: Ensure existingHolding.avgCost hamesha ek number ho
        const currentAvgCost = existingHolding.avgCost || existingHolding.price || 0;
        const totalOldCost = existingHolding.qty * currentAvgCost;
        const newTotalCost = totalOldCost + totalAmount;
        
        existingHolding.qty += Number(qty);
        // Naya average cost set karna
        existingHolding.avgCost = newTotalCost / existingHolding.qty;
        // Latest market price update karna
        existingHolding.price = Number(price); 
        
        await existingHolding.save();
      } else {
        // Nayi holding bana rahe hain, toh avgCost = price hoga
        const newHolding = new Holding({
          user: userId, 
          name: name, 
          qty: Number(qty), 
          price: Number(price), 
          avgCost: Number(price), // YAHAN FIX KIYA HAI: First buy pe avgCost set ho raha hai
          net: "+", 
          day: "+0.00%"
        });
        await newHolding.save();
      }

    } else if (mode === "SELL") {
      // Check karo stock hai ya nahi
      let existingHolding = await Holding.findOne({ user: userId, name: name });
      if (!existingHolding || existingHolding.qty < Number(qty)) {
        return res.status(400).json({ success: false, message: "You don't have enough shares to sell!" });
      }

      // Paise add karo
      user.availableBalance += totalAmount;
      await user.save();

      // Holding se shares kam karo
      existingHolding.qty -= Number(qty);
      if (existingHolding.qty === 0) {
        await Holding.findByIdAndDelete(existingHolding._id); // 0 shares bache to delete kar do
      } else {
        await existingHolding.save();
      }
    } else {
      return res.status(400).json({ success: false, message: "Invalid Order Mode" });
    }

    // Order History me save karo
    const newOrder = new Order({
      user: userId, name: name, qty: qty, price: price, mode: mode
    });
    await newOrder.save();

    res.json({ success: true, message: `${mode} Order Placed Successfully!`, balance: user.availableBalance });

  } catch (error) {
    console.error("💥 PLACE ORDER ERROR:", error);
    res.status(500).json({ success: false, message: "Transaction failed" });
  }
});

// 2. GET HOLDINGS API
router.get("/get-holdings", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;
    const holdings = await Holding.find({ user: userId });
    res.json({ success: true, data: holdings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch holdings" });
  }
});

// 3. GET ORDERS API
router.get("/get-orders", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id || req.user._id;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 }); // Latest pehle
    res.json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
});

module.exports = router;