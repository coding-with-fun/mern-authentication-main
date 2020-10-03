const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();

// Setup Express
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}...`.red);
});

// Setup Mongoose
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.info("MongoDB connected!!".red);
  }
);

// Setup routes
app.use("/", require("./routes/homeRouter"));
