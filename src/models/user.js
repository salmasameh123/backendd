const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscribtion: {
    type: String,
  },
});
module.exports = mongoose.model("User", UserSchema);
