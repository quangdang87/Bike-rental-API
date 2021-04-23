/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const mongo = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

const vehiclecounts = [
  {
    vgid: 1,
    vehicleName: "fz 750",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2018/02/12/02/05/motorcycle-3147278_960_720.jpg",
    RentalPrice: 100,
    count: 4,
  },
  {
    vgid: 2,
    vehicleName: "yamaha virago",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2017/06/27/20/07/yamaha-2448684_960_720.jpg",
    RentalPrice: 160,
    count: 5,
  },
  {
    vgid: 3,
    vehicleName: "bmw bike",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2016/02/19/11/25/motorcycle-1209698_960_720.jpg",
    RentalPrice: 100,
    count: 1,
  },
  {
    vgid: 4,
    vehicleName: "kawasaki",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2014/10/24/08/31/motorcycle-500910_960_720.jpg",
    RentalPrice: 170,
    count: 2,
  },
  {
    vgid: 5,
    vehicleName: "ducati",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2016/03/21/04/02/motorcycle-1269976_960_720.jpg",
    RentalPrice: 200,
    count: 1,
  },
  {
    vgid: 6,
    vehicleName: "harley davidson",
    vehicleImgURL:
      "https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg",
    RentalPrice: 150,
    count: 5,
  },
];

const vehicleids = [
  {
    vgid: 1,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 1,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 1,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 1,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 2,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 2,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 2,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 2,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 2,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 3,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 4,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 4,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 5,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 6,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 6,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 6,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 6,
    status: "nb",
    startDate: null,
    endDate: null,
  },
  {
    vgid: 6,
    status: "nb",
    startDate: null,
    endDate: null,
  },
];

mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const db = client.db("BikeRentals");

    const collection = db.collection("vehiclecounts");

    collection
      .insertMany(vehiclecounts)
      .then((result) => {
        console.log(result);
        console.log("vehiclecounts dummy data created");

        const newCollection = db.collection("vehicleids");
        newCollection.insertMany(vehicleids, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            console.log("vehicleids dummy data created");
          }

          client.close();
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("something went wrong");
      });
  }
});
