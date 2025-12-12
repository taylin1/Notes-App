const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// route for browser
app.get("/", (req, res) => {
  res.send("Server is running...");
});



module.exports = app;
