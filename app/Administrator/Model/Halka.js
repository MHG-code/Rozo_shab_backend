const mongoose = require("mongoose");

const Halka = mongoose.Schema({
  halka_name: {
    type: String,
    required: true,
    unique: true,
  },
  nazm_e_halka: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  linked: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "halka",
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

module.exports = mongoose.model("halka", Halka);
