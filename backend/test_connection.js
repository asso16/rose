// test_connection.js
const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log("Attempting to connect to:", MONGODB_URI); // Log the URI

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => {
    console.error("MongoDB Connection Error:");
    console.error(err); // Log the full error object
  });
// Run this file with node backend/test_connection.js