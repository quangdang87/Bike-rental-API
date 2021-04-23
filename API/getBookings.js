/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

let vehicleIds = require("../models/vehicleIds");
let bookings = require("../models/bookings");
let vehicleCounts = require("../models/vehicleCounts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let config = require("../config");
const mongo = require("mongodb").MongoClient;

module.exports = async function (req, res) {
  /*write your code here*/
  let {uid} = req.body;
  try {
    let result = await bookings.find({uid});
    res.json(result);
  } catch (err) {
    console.log("error happened while getBooking: ", err);
    res.json([]);
  }
};
