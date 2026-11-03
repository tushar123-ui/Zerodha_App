const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    qty: Number,
    avgCost: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingSchema };