const express = require("express");
const router = express.Router();
const supabase = require("../supabase/supabaseClient");

//Signup route
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password
  });

  if (error) return res.status(400).json({ error: error.message });

  res.json({ user: data.user });
});



// LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ user: data.user });
});

module.exports = router;
