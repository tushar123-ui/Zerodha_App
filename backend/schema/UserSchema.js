const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },

  availableBalance: { type: Number, default: 0 }, 
  usedMargin: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = { UserSchema };