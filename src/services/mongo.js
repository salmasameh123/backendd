const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.connection.once("open", () => {
  console.log("DB Connection ready");
});
mongoose.connection.once("error", (err) => {
  console.log("error:", err);
});

const mongoConnect = async () => {
  await mongoose.connect(MONGO_URL);
};

module.exports = { mongoConnect };
