const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
  );

app.listen(3000, ()=>{
    console.log("Backend server is running")
})