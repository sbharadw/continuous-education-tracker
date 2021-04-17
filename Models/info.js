const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    courseName: { type: String, required: true },
    courseHours: { type: Number, // look into type for this
            required: true },
    totalHours: { type: Number, // look into type for this
                required: true },
    synopsis: String,  // look into what this means?
    type: {
        type: String, 
        required: false,
    },
    date: { type: Date, default: Date.now }
    });
    const Info = mongoose.model("Info", infoSchema);
    module.exports = Info;