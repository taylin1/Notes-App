const express = require("express");
const router = express.Router();
const supabase = require("../supabase/supabaseAdmin");

router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("notes").select("*");

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;

  const { data, error } = await supabase
    .from("notes")
    .insert([{ title, content , user_id: user.id}]);

  if (error) return res.status(400).json({ error: error.message });

  res.json(data);
});

module.exports = router;
