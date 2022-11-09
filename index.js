const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// imports the API from the routes/api folder
const blocks = require("./routes/api/blocks");
const stackjoins = require("./routes/api/stackjoins");

// initializes the express application
const app = express();

// sets up CORS for Cross-Origin-Resource-Sharing
app.use(cors());
// converts API responses to JSON for easy use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// imports our database credentials (stored separately for security)

const db = process.env.MONGO_URI;

// initializes our database using the credentials
// mongoose.set("useFindAndModify", false);
mongoose
  .connect(db, () => {}, { useNewUrlParser: true })
  .then(() => console.log("Mongo Database connected"))
  .catch((err) => console.log(err));

// creates a route where we can interact with our API
app.use("/api/blocks", blocks);
app.use("/api/stackjoins", stackjoins);

// sets the port number depending if we are in production or development
const port = process.env.PORT || 5050;

// intializes the server and logs a message
server = app.listen(port, () => console.log(`Server running on port ${port}`));
