/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const express = require("express");
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
let middleware = require("./middleware");

var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/BikeRentals",
  {useNewUrlParser: true},
  (err) => {
    /* istanbul ignore else  */
    if (!err) {
      console.log("connected");
    } else {
      console.log("connection failed: " + err);
    }
  }
);

// Starting point of the server

let app = express(); // Export app for other routes to use
let handlers = require("./handlers/handler.js");
const port = process.env.PORT || 8000;
app.use(
  bodyParser.urlencoded({
    // Middleware
    extended: true,
  })
);
app.use(bodyParser.json());

app.post("/login", handlers.login); //done
app.post("/register", handlers.register); //done
app.post("/validToken", handlers.validToken);
app.post("/getBikes", handlers.getBikes); //done
app.post("/book", handlers.Book);
app.post("/getBookings", handlers.getBooking); //done
app.post("/unbook", handlers.UnBook);
//app.listen(port, () => console.log(`Server is listening on port: ${port}`));

module.exports = app;
