const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    // Validate input
    if (!name || !email || !password || !location) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Create a new user
    await User.create({ name, email, password, location });
    res.json({ success: true, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
