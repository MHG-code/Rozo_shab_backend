const mongoose = require("mongoose");

const User = mongoose.Schema({
  //usernam : String
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: {
      values: ["karkun", "rafeeq", "umeedwar", "rukan"],
      message: "{VALUE} is not supported",
    },
  },
  area: [
    {
      ilaqa: { type: mongoose.Schema.Types.ObjectId, ref: "ilaqa" },
      circle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "circle",
      },
      halka: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "halka",
      },
    },
  ],

  password: {
    type: String,
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

module.exports = mongoose.model("user", User);
