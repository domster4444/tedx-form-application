const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  receiptLink: {
    type: String,
    required: false,
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;

// firstName, middleName, lastName, email, phoneNumber, address
