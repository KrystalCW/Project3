const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    scheduled: { type: Boolean },
    originalPurchaseDate: { type: Date },
    price: { type: Number, default: 0 },
    attachments: { type: String },
    notes: { type: String },
    date: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;