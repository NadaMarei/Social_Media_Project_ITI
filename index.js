const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const CommentRoute = require("./routes/comments");
const ReviewRoute=require('./routes/reviews');

// use .env for secret keys
dotenv.config();

// connected to MongoDB
mongoose.connect(
    process.env.MONGO_URL 
  );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use('/posts', CommentRoute);
app.use('/posts', ReviewRoute);



app.listen(2000, ()=>{
    console.log("Backend server is running")
})
