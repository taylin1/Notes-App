const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const notesRoutes = require("./routes/notesRoutes");
const authRoutes = require("./routes/authRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// route for browser
app.get("/", (req, res) => {
  res.send("Server is running...");
});



module.exports = app;
