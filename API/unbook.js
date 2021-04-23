let vehicleIds = require("../models/vehicleIds");
let bookings = require("../models/bookings");
let vehicleCounts = require("../models/vehicleCounts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let config = require("../config");
const mongo = require("mongodb").MongoClient;

module.exports = function (req, res) {
  /*write your code here*/
  let {bookid} = req.body;
  if (bookid) {
    bookings.findByIdAndDelete(bookid, (err, doc) => {
      if (err) {
        res.json({status: "Interal Server Error."});
      } else {
        res.json({status: "nb", ...doc});
      }
    });
  } else {
    res.status(400).json({status: "failed", message: "Invalid bookid"});
  }
};
