
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Routers
const budget_router = require("./routes/budget-routes");
const post_router = require("./routes/post-routes");
const drive_router = require("./routes/drive-routes");
const discount_router = require("./routes/discount-routes");

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/budgets", budget_router); // localhost:5000/budgets
app.use("/posts", post_router); // localhost:5000/posts
app.use("/drives", drive_router); // localhost:5000/drives
app.use("/discounts", discount_router); // localhost:5000/drives


//5knLkTrtbu1yqFpR
mongoose
  .connect(
    "mongodb+srv://admin:5knLkTrtbu1yqFpR@budget.jslcg3f.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  }) 
  .catch((err) => console.log(err));

