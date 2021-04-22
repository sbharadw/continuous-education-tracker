const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    courseName: { type: String, required: true },
    courseHours: { type: Number, 
            required: true },
    totalHours: { type: Number,
                required: true },
    synopsis: String, 
    type: {
        type: String, 
        required: false,
    },
    date: { type: Date, default: Date.now }
    });
    const Info = mongoose.model("Info", infoSchema);
    module.exports = Info;