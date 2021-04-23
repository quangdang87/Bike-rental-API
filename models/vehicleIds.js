var mongoose = require("mongoose");

var schema = mongoose.Schema;

const vehicleCountSchema = new schema({
  _id: mongoose.Schema.Types.ObjectId,
  vgid: Number,
  status: String,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("vehicleIds", vehicleCountSchema);
