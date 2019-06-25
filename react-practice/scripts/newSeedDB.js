const mongoose = require("mongoose");
const db = require("../models");

// This file empties the 'item' collection and inserts the items below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/itemslist");

const itemSeed = [
  {
    item_name: "Leather Couch",
    item_description: "Description - Leather Couch",
    item_notes: "Notes - Leather Couch",
    item_scheduled: false,
    item_value: "1500",
    item_purchasePrice: "1500",
    item_dateObtained: new Date(Date.now()),
    item_identificationNumber: "123-XYZ",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Upstairs",
    item_categoryName: "Furniture",
    item_categoryDescription: "Home - Office - Furniture",
    item_attachments: [
        {
            file_name: "couch_photo.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Couch Photo"
        },
        {
            file_name: "couch_receipt.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Couch Receipt"
        }
    ]
  },
  {
    item_name: "Piano",
    item_description: "Description - Piano",
    item_notes: "Notes - Piano",
    item_scheduled: false,
    item_value: "8000",
    item_purchasePrice: "8000",
    item_dateObtained: new Date(Date.now()),
    item_identificationNumber: "P-123",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Downstairs",
    item_categoryName: "Musical Instruments",
    item_categoryDescription: "Musical Instruments",
    item_attachments: [
        {
            file_name: "piano_photo.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Piano Photo"
        },
        {
            file_name: "piano_receipt.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Piano Receipt"
        }
    ] 
  },  
  {
    item_name: "Laptop",
    item_description: "Description - Laptop",
    item_notes: "Notes - Laptop",
    item_scheduled: false,
    item_value: "750",
    item_purchasePrice: "750",
    item_dateObtained: new Date(Date.now()),
    item_identificationNumber: "LAB-123",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Home Office",
    item_locationDescription: "Home Office - Downstairs",
    item_categoryName: "Electronics",
    item_categoryDescription: "Electronics - Home Office",  
    item_attachments: [
        {
            file_name: "laptop_photo.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Laptop Photo"
        },
        {
            file_name: "laptop_receipt.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Laptop Receipt"
        }
    ]
  },  
  {
    item_name: "Gun",
    item_description: "Description - Gun",
    item_notes: "Notes - Gun",
    item_scheduled: false,
    item_value: "800",
    item_purchasePrice: "800",
    item_dateObtained: new Date(Date.now()),
    item_identificationNumber: "G-123",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Safe",
    item_locationDescription: "Safe - Upstairs",
    item_categoryName: "Sporting Goods",
    item_categoryDescription: "Hunting - Sporting Goods",
    item_attachments: [
        {
            file_name: "gun_photo.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Gun Photo"
        },
        {
            file_name: "gun_receipt.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "Gun Receipt"
        }
    ]
  },  
  {
    item_name: "TV",
    item_description: "Description - TV",
    item_notes: "Notes - TV",
    item_scheduled: false,
    item_value: "1500",
    item_purchasePrice: "1500",
    item_dateObtained: new Date(Date.now()),
    item_identificationNumber: "T-122",
    item_idNumberType: "Serial Number",
    item_quantity: "1",
    item_locationName: "Living Room",
    item_locationDescription: "Living Room - Upstairs",
    item_categoryName: "Electronics",
    item_categoryDescription: "Electronics - Home Office",  
    item_attachments: [
        {
            file_name: "tv_photo.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "TV Photo"
        },
        {
            file_name: "tv_receipt.jpg",
            file_path: "./resources",
            file_type: "jpg",
            file_desciption: "TV Receipt"
        }
    ]
  }
] 

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