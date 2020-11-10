const express = require("express");
const bodyParser = require("body-parser");

//dotenv
require("dotenv").config();
// Cors
const cors = require("cors");
const app = express();

// CORS
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Body parser middleware
app.use(express.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 500000,
  })
);

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
