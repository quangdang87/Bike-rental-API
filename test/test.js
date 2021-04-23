/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let HandlerGenerator = require("../handlers/handler.js");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../testserver");
let should = chai.should();
let expect = chai.expect();
let request = require("supertest");

chai.use(chaiHttp);

describe("Fetch details", () => {
  /*
   * Test the /GET route
   */
  describe("/GET fetch", () => {
    it("it should test login API", function (done) {
      request(server)
        .post("/login")
        .send({email: "test@gmail.com", pwd: "123456789"})
        .set("Accept", "application/json")
        .expect(function (res) {})
        .expect(200)
        .then((response) => {
          response.body.should.have.property("success");
          response.body.should.have.property("message");
          done();
        })
        .catch((err) => {
          console.log(err);
          done(new Error(err));
        });
    });

    it("it should test getBikes API", function (done) {
      var startDate = new Date();
      var numberOfDaysToAdd = 6;
      var endDate = new Date();
      endDate.setDate(startDate.getDate() + numberOfDaysToAdd);

      request(server)
        .post("/getBikes")
        .send({startDate: startDate, endDate: endDate})
        .set("Accept", "application/json")
        .expect(function (res) {
          //console.log(res);
        })
        .expect(200)
        .then((response) => {
          response.body.should.be.an("object");
          response.body.should.have.property("data");
          response.body.data.should.be.an("array");
          done();
        })
        .catch((err) => {
          console.log(err);
          done(new Error(err));
        });
    });
    it("it should test register API", function (done) {
      var formdata = {
        email: "test@gmail.com",
        pwd: "123456789",
        fname: "test",
        lname: "ntest",
      };

      request(server)
        .post("/register")
        .send(formdata)
        .set("Accept", "application/json")
        .expect(function (res) {
          //console.log(res);
        })
        .expect(200)
        .then((response) => {
          response.body.should.be.an("object");
          response.body.should.have.property("status");
          done();
        })
        .catch((err) => {
          console.log(err);
          done(new Error(err));
        });
    });

    it("it should test getBooking API", function (done) {
      var formdata = {
        uid: new mongoose.Types.ObjectId(),
      };

      request(server)
        .post("/getBookings")
        .send(formdata)
        .set("Accept", "application/json")
        .expect(function (res) {
          //console.log(res)
        })
        .expect(200)
        .then((response) => {
          response.body.should.be.an("array");
          response.body.should.have.lengthOf(0);
          done();
        })
        .catch((err) => {
          console.log(err);
          done(new Error(err));
        });
    });

    //  it('it should test getBooking API', function(done) {

    // var formdata={
    //     	uid: new mongoose.Types.ObjectId()
    //     };

    //   request(server)
    //   .post('/getBookings')
    //   .send(formdata)
    //   .set('Accept', 'application/json')
    //   .expect(function(res) {
    //     //console.log(res);
    //   })
    //    .expect(200)
    //    .then(response => {
    //    	response.body.should.be.an("array");
    //    	response.body.should.have.lengthOf(0);
    //    	done();
    //    }).catch(err => {
    //      console.log(err);
    //      done(new Error(err));
    //    })

    //   });

    it("it should test Book API", function (done) {
      var startDate = new Date();
      var numberOfDaysToAdd = 6;
      var endDate = new Date();
      endDate.setDate(startDate.getDate() + numberOfDaysToAdd);

      var formdata = {
        vgid: 2,
        v_id: new mongoose.Types.ObjectId(),
        uid: new mongoose.Types.ObjectId("5d47cc4d2dc06d5a74e81fee"),
        startDate: startDate,
        endDate: endDate,
      };

      request(server)
        .post("/book")
        .send(formdata)
        .set("Accept", "application/json")
        .expect(function (res) {
          //console.log(res);
        })
        .expect(200)
        .then((response) => {
          response.body.should.be.an("object");
          response.body.should.have.property("status");
          done();
        })
        .catch((err) => {
          console.log(err);
          done(new Error(err));
        });
    });

    it("it should test UnBook API", function (done) {
      var formdata = {
        bookid: new mongoose.Types.ObjectId(),
      };

      request(server)
        .post("/unbook")
        .send(formdata)
        .set("Accept", "application/json")
        .expect(function (res) {
          //console.log(res);
        })
        .expect(200)
        .then((response) => {
          response.body.should.be.an("object");
          response.body.should.have.property("status");
          done();
        })
        .catch((err) => {
          //console.log(err);

          done(new Error(err));
        });
    });
  });
});
