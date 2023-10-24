const express = require("express");
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
const dbConnection = require("./db/connection");
const qrRoute = require("./routes/qrcodes");
const userRoute = require("./routes/userroutes");
var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", qrRoute);
app.use("/users", userRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("server started");
});
