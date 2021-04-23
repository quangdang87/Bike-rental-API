let user = require("../models/user");
let vehicleIds = require("../models/vehicleIds");
let bookings = require("../models/bookings");
let vehicleCounts = require("../models/vehicleCounts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;

module.exports = async function (req, res) {
  let {v_id, uid, vgid, startDate, endDate} = req.body;
  try {
    const vehicleFound = await vehicleCounts.findOne({vgid});
    if (vehicleFound && vehicleFound.count > 0) {
      //update count for vehicleFound
      vehicleFound.count--;
      await vehicleFound.save();
      //insert
      let newBooking = new bookings({
        _id: new mongoose.Schema.Types.ObjectId(),
        uid,
        vgid,
        v_id,
        startDate,
        endDate,
      });
      await newBooking.save();
      newBooking.status = "b";
      res.json(newBooking);
    } else {
      res.json({status: "failed"});
    }
  } catch (err) {
    console.log(err);
  }
};
