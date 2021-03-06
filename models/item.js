const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemAttachmentSchema = new Schema({
    file_name: String,
    file_path: String,
    file_type: String,
    file_description: String
});

const itemSchema = new Schema({
  item_name: { type: String, required: true },
  item_description: { type: String },
  item_notes: String,
  item_scheduled: Boolean,
  item_value: String,
  item_purchasePrice: String,
  item_dateObtained: {type: Date, default: Date.now },
  item_identificationNumber: String,
  item_idNumberType: String,
  item_quantity: String,
  item_locationName: String,
  item_locationDescription: String,
  item_categoryName: String,
  item_categoryDescription: String,
  // item_attachments: [itemAttachmentSchema]
  item_attachments: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
