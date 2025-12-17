const express = require("express");
const router = express.Router();

const supabaseAnon = require("../supabase/supabaseAnon");
const supabaseAdmin = require("../supabase/supabaseAdmin");

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabaseAnon.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
});

module.exports = router;
