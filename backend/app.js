const express = require("express"); //importing express
const cors = require("cors");

require("dotenv").config();

const app = express();

const notesRoutes = require("./routes/notesRoutes"); //importing route
const authRoutes = require("./routes/authRoutes"); //importing route

// Middlewares
app.use(cors());
app.use(express.json());

//Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// route for browser
app.get("/", (req, res) => {
  res.send("Server is running...");
});



module.exports = app;
