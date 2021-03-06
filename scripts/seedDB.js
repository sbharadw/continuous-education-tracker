const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/CETList"
);

const userSeed = [
    {
        subId: "11111",
        employeeId: "22222",
        firstname: "Andy",
        lastname: "Hinrichs",
        role: "1",
        email: "test@email.com",
        hospital: "Childrens National Hospital",
        unit: "PICU",
        info: "1"
    },
    {
        subId: "33333",
        employeeId: "44444",
        firstname: "Neil",
        lastname: "Tyson",
        role: "2",
        email: "test2@email.com",
        hospital: "Childrens National Hospital",
        unit: "PICU",
        info: "2"
    },
    {
        subId: "55555",
        employeeId: "66666",
        firstname: "Alexander",
        lastname: "Flemming",
        role: "3",
        email: "test3@email.com",
        hospital: "Childrens National Hospital",
        unit: "PICU",
        info: "3"
    },
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
