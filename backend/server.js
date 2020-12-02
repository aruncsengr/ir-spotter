"use strict";

const express = require("express");
const cors = require("cors");
const trainsRouter = require("./routes/trains");

// Constants
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "0.0.0.0";

//  DB
// require("./db");

// App
const app = express();
app.use(cors());
app.use("/trains", trainsRouter);

// Listener
app.listen(PORT, HOST);
console.log(`IR-Spotter running on http://${HOST}:${PORT}`);

module.exports = app
