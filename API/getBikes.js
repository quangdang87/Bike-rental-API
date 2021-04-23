let vehicleIds = require("../models/vehicleIds");
let bookings = require("../models/bookings");
let vehicleCounts = require("../models/vehicleCounts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let config = require("../config");
const mongo = require("mongodb").MongoClient;

module.exports = async function (req, res) {
  /*write your code here*/
  let {startDate, endDate} = req.body;
  startDate = null;
  endDate = null;
  let vehiclesData = [];
  //get all vehicleIds available
  let temp = {};
  try {
    let tempArr = await vehicleIds.find({startDate, endDate});
    for (let vehicle of tempArr) {
      if (temp[vehicle.vgid] && temp[vehicle.vgid].length > 0) {
        temp[vehicle.vgid].push(vehicle._id);
      } else {
        temp[vehicle.vgid] = [vehicle._id];
      }
    }
    for (let key of Object.keys(temp)) {
      await vehicleCounts.findOne({vgid: key}).then((vehicle) => {
        let {vgid, vehicleName, vehicleImgURL, RentalPrice, count} = vehicle;
        vehiclesData.push({
          ids: temp[key],
          startDate,
          endDate,
          vgid,
          vehicleName,
          vehicleImgURL,
          RentalPrice,
          count,
        });
      });
    }
    res.json({data: vehiclesData});
  } catch (err) {
    console.log(err);
    res.json({msg: "Internal Server Error", data: []});
  }
};
