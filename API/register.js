let user = require("../models/user");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");
let jwt = require("jsonwebtoken");
let config = require("../config");
const mongo = require("mongodb").MongoClient;

module.exports = async function (req, res) {
  /*write your code here*/
  let {email, password, fname, lname} = req.body;
  // let rand = Math.floor(Math.random() * 90 + 10);
  let newUser = new user({
    _id: new mongoose.Types.ObjectId(),
    email: email,
    pwd: password,
    username: fname + "-" + lname,
  });
  newUser.save((err) => {
    if (err) {
      console.log("Error happened while register", err);
      res.json({message: "Internal Server Error."});
    }
    res.json({status: "success", ...newUser._doc});
  });
};
