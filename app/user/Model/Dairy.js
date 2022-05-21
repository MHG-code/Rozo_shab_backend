const mongoose = require("mongoose");

const Dairy = mongoose.Schema({
    Namaz:[{

        Fajar:
        {
            type: String,
            enum: {
                    values: ["Ba_Jammat", "Infaradi", "Qaza","-"],
                    message: "{VALUE} is not supported",
                  },
                  default: '-',
        },
        Zuahr:
        {
            type: String,
            enum: {
                    values: ["Ba_Jammat", "Infaradi", "Qaza","-"],
                    message: "{VALUE} is not supported",
                  },
                  default: '-',

        },
        Assar:
        {
            type: String,
            enum: {
                    values: ["Ba_Jammat", "Infaradi", "Qaza","-"],
                    message: "{VALUE} is not supported",
                  },
                  default: '-',

        },
        Magrib:
        {
            type: String,
            enum: {
                    values: ["Ba_Jammat", "Infaradi", "Qaza","-"],
                    message: "{VALUE} is not supported",
                  },
                  default: '-',

        },
        Isha:
        {
            type: String,
            enum: {
                    values: ["Ba_Jammat", "Infaradi", "Qaza","-"],
                    message: "{VALUE} is not supported",
                  },
                  default: '-',

        }
    }],
    Quran:{
        Tilawat:{
            Surat_name: String,
            start_Ayyat: Number,
            end_Ayyat: Number,
            total_time: String 
        },
        Tafseer:{
            Surat_name: String,
            start_Ayyat: Number,
            end_Ayyat: Number,
            total_time: String 
        }
    },

    Hadees:{
        hawala: String,
        How_many: Number,
        total_time: String
    },
    study:{
        total_time: String,

    },
    meetings:{
        how_many_meetings: Number,
        productive_meetings: Number,
        extra_mmetings: Number,
        total_meetings_time: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
  createdOn: {
    type: Date,
    // timezone: "America/Chicago",
    default: Date.now(),
  },
});

// Model

module.exports = mongoose.model("dairy", Dairy);
