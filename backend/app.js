const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const authRoutes = require("./routes/authRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// route for browser
app.get("/", (req, res) => {
  res.send("Server is running...");
});



module.exports = app;
