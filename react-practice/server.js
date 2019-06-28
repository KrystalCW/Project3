const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
var logger = require("morgan");

const app = express();


app.use(logger("dev"));
app.use(express.static("public"));

app.use(cors() );
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);



// Connect to the Mongo DB
// mongoose.connect("mongodb://heroku_947brlt3:finalproject1@ds337377.mlab.com:37377/heroku_947brlt3", { useNewUrlParser: true });

// if (process.env.NODE_ENV === 'dev') {
//   module.exports = require('./keys_dev');
// } else {
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/itemslist");
// }


  
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

