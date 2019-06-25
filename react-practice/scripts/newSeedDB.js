const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/itemslist"
);

/*
const itemAttachmentSchema = new Schema({
    file_name: String,
    file_path: String,
    file_type: String,
    file_description: String
});

const itemSchema = new Schema({
  item_name: "Leather Couch",
  item_description: "Description - Leather Couch",
  item_notes: "Notes - Leather Couch",
  item_scheduled: false,
  item_value: "1500",
  item_purchasePrice: "1500",
  item_dateObtained: 10/26/2019,
  item_identificationNumber: "123XYZ",
  item_idNumberType: "Serial Number",
  item_quantity: "1",
  item_locationName: "Living Room",
  item_locationDescription: "Living Room - Upstairs",
  item_categoryName: "Furniture",
  item_categoryDescription: "Home - Office - Furniture",
  item_attachments: [itemAttachmentSchema]
});

*/

const itemSeed = [
  {
    item_name: "Leather Couch",
    item_description: "Description - Leather Couch",
    item_notes: "Notes - Leather Couch",
    item_scheduled: false,
    item_value: "1500",
    item_purchasePrice: "1500",
    item_dateObtained: 10/26/2019,
    item_identificationNumber: "123-XYZ",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Upstairs",
    item_categoryName: "Furniture",
    item_categoryDescription: "Home - Office - Furniture",  
  },
  {
    item_name: "Piano",
    item_description: "Description - Piano",
    item_notes: "Notes - Piano",
    item_scheduled: false,
    item_value: "8000",
    item_purchasePrice: "8000",
    item_dateObtained: 08/13/2008,
    item_identificationNumber: "P-123",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Downstairs",
    item_categoryName: "Musical Instruments",
    item_categoryDescription: "Musical Instruments",  
  },  
  {
    item_name: "Laptop",
    item_description: "Description - Laptop",
    item_notes: "Notes - Laptop",
    item_scheduled: false,
    item_value: "750",
    item_purchasePrice: "750",
    item_dateObtained: 10/26/2019,
    item_identificationNumber: "LAB-123",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Home Office",
    item_locationDescription: "Home Office - Downstairs",
    item_categoryName: "Electronics",
    item_categoryDescription: "Electronics - Home Office",  
  },  
  {
    item_name: "",
    item_description: "Description - ",
    item_notes: "Notes - ",
    item_scheduled: false,
    item_value: "",
    item_purchasePrice: "",
    item_dateObtained: 10/26/2019,
    item_identificationNumber: "123XYZ",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Downstairs",
    item_categoryName: "Furniture",
    item_categoryDescription: "Home - Office - Furniture",  
  },  
  {
    item_name: "",
    item_description: "Description - ",
    item_notes: "Notes - ",
    item_scheduled: false,
    item_value: "",
    item_purchasePrice: "",
    item_dateObtained: 10/26/2019,
    item_identificationNumber: "123XYZ",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Downstairs",
    item_categoryName: "Furniture",
    item_categoryDescription: "Home - Office - Furniture",  
  },  
/*
  {
    item_name: "",
    item_description: "Description - ",
    item_notes: "Notes - ",
    item_scheduled: false,
    item_value: "",
    item_purchasePrice: "",
    item_dateObtained: 01/31/2019,
    item_identificationNumber: "123-XYZ",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Downstairs",
    item_categoryName: "Furniture",
    item_categoryDescription: "Home - Office - Furniture",  
  },  
*/
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