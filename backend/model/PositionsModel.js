const { model } = require("mongoose");

const { PositionSchema } = require("../schema/PositionsSchema");
const PositionsModel = new model("position", PositionSchema);

module.exports = { PositionsModel }; 