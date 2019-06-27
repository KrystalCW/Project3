const express = require("express");
//const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");


const app = express();




app.use(cors() );
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);



// Connect to the Mongo DB

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connection established."))
  .catch((err) => console.log(err))

  
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

