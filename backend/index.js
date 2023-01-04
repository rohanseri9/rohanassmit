const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./database/mongoDb");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "config.env" });

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


const adminRoutes = require("./routes/admin.routes");
const movieRoutes = require("./routes/movie.routes")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", adminRoutes);
app.use("/", movieRoutes);

app.listen(port, () => {
  connect();
  console.log(`Example app listening at http://localhost:3000`);
});
