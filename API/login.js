/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

let user = require("../models/user");
let vehicleIds = require("../models/vehicleIds");
let bookings = require("../models/bookings");
let vehicleCounts = require("../models/vehicleCounts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let jwt = require("jsonwebtoken");
let config = require("../config");
const mongo = require("mongodb").MongoClient;
const {rsort} = require("semver");

module.exports = function (req, res) {
  //get req.body;
  let {email, password} = req.body;
  //find user in database
  user.findOne({email}, (err, userInfo) => {
    if (err) console.log("error happened when logging in: ", err);
    else if (userInfo) {
      let retObj = {
        message: "Log in failed",
        token: null,
        uid: null,
        success: false,
      };
      if (userInfo.password === password) {
        let token = jwt.sign({userInfo}, config.secret);
        let uid = userInfo._id;
        retObj = {
          success: true,
          message: "Logged In",
          token,
          uid,
        };
        res.json(retObj);
      } else {
        res.json({retObj});
      }
    } else {
      res.json({
        success: false,
        message: "User not found.",
        token: null,
        uid: null,
      });
    }
  });
};
