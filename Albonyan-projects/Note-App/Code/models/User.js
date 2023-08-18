const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide your username"],
    minLength: 3,
    maxLength: 20,
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: {
      validator: validator.isEmail,
      message: "PLease provide valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength: 6,
    select: false,
  },
  phone: {
    type: String,
    required: [true, "Please provide your phone"],
    trim: true,
    unique: true,
  },
  birthYear: {
    type: String,
    trim: true,
    maxLength: 20,
    required: [true, "Please provide your birthYear"],
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
module.exports = mongoose.model("User", UserSchema);
