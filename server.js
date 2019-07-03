const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
var logger = require("morgan");
const passport = require("passport");

const app = express();

const db = require("./config/keys").mongoURI
//.process.env.REACT_APP_SECRET_NAME;


require("./config/passport");


app.use(logger("dev"));
app.use(express.static("./client/public"));

app.use(cors() );
// Define middleware here
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);

//Connect to Mongodb
mongoose
  .connect(db, {userNewUrlParser: true}
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

