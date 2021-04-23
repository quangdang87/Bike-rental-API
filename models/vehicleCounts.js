var mongoose = require("mongoose");

var schema = mongoose.Schema;

const vehicleCountSchema = new schema({
  _id: mongoose.Schema.Types.ObjectId,
  vgid: Number,
  vehicleName: String,
  vehicleImgURL: String,
  RentalPrice: Number,
  Count: Number,
});

module.exports = mongoose.model("vehicleCount", vehicleCountSchema);
