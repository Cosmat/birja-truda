const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");
var cors = require("cors");
const keys = require("./keys");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "/dist/spa")));
app.use(authRoutes);


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "/dist/spa/index.html"));
});

mongoose
  .connect(keys.MONGO_URI, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB sucsessfuly connected"))
  .catch((error) => console.error(error));
module.exports = app;
