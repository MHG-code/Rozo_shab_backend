const mongoose = require("mongoose");

const Ilaqa = mongoose.Schema({
  ilaqa_name: {
    type: String,
    required: true,
    unique: true,
  },
  nazm_e_ilaqa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  linked: {
    type: String,
    default: "Lahore",
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

module.exports = mongoose.model("ilaqa", Ilaqa);
