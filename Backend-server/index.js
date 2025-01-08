const express = require("express");
const dotenv = require("dotenv");
const mongoDB = require("./db");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./Routes/CreateUser"));

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
