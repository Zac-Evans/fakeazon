const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//Pulls from our models so we can reference is with 'db'
const db = require("./models");
//Pulls in routes to use for sequelize
const apiRoutes = require("./routes/apiRoutes");
app.use("/", apiRoutes);
//DB Connection
require("./models/index");
app.get("/", (req, res) => {
  res.send("Hello World!");
});
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  });
});