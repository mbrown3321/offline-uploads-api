const express = require("express");
const app = express();
const cors = require("cors");
const uploadRoutes = require("./routes/uploads");
const bodyParser = require("body-parser");

app.use("*", cors());
app.use(bodyParser.json({ limit: "100mb", extended: true }));

app.use(uploadRoutes);

app.listen(8000);
