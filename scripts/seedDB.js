const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/itemslist"
);

const itemSeed = [
  {
    name: "Leather Couch",
    quantity: 1,
    scheduled: false,
    originalPurchaseDate: 10/26/2019,
    price: 1500,
    date: new Date(Date.now())
  },
  {
    name: "Piano",
    quantity: 1,
    scheduled: false,
    originalPurchaseDate: 08/13/2008,
    price: 8000,
    date: new Date(Date.now())
  },
  {
    name: "Laptop",
    quantity: 1,
    scheduled: false,
    originalPurchaseDate: 01/01/2019,
    price: 750,
    date: new Date(Date.now())
  },
  {
    name: "Gun",
    quantity: 1,
    scheduled: false,
    originalPurchaseDate: 07/23/2005,
    price: 800,
    date: new Date(Date.now())
  },
  {
    name: "TV",
    quantity: 1,
    scheduled: false,
    originalPurchaseDate: 02/02/2018,
    price: 1500,
    date: new Date(Date.now())
  }
]

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });