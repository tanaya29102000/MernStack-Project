const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully!");

    // Optional: Check a specific collection
    const fetched_data = mongoose.connection.db.collection("food_item");
    const data = await fetched_data.find({}).toArray();
    console.log("Sample data:", data);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit on failure
  }
};

module.exports = mongoDB;
