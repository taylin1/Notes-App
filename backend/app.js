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

// Route files
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

module.exports = app;
