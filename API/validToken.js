const jwt = require("jsonwebtoken");
const config = require("../config");
module.exports = function (req, res) {
  /*write your code here*/
  const token = req.headers["x-header-token"];
  if (!token) {
    res.status(400).json({msg: "Invalid token."});
  } else {
    //verified token
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({msg: "Invalid token"});
      } else {
        res.json({msg: "Valid token."});
      }
    });
  }
};
