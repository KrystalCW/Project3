const app = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const models = require("./models");








app.listen(3000, function() {
    console.log("App running on port 3000!");
});