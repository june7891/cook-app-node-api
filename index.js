const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/recipes.routes");
const cors = require("cors");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
