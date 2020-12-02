const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/signUp", (req, res) => {
  const { name, email, password } = req.body;
  const docToSave = new User({ name, email, password });
  docToSave.save((err) => {
    if (err) {
      throw err;
    }
    console.log("DB UPDATED");
    res.status(201).json({ status: "Saved" });
  });
});

module.exports = router;
