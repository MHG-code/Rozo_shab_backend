const mongoose = require("mongoose");

const Circle = mongoose.Schema({
  circle_name: {
    type: String,
    required: true,
    unique: true,
  },
  nazm_e_circle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  linked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ilaqa",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

// Model

module.exports = mongoose.model("circle", Circle);
