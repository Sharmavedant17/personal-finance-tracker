const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {

    id: {
      type: String,
    },
     username: {
      type: String,
      required: true,
    },
     password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
