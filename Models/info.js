const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    courseName: { 
        type: String, 
        required: true 
    },
    courseHours: { 
        type: Number, 
        required: true 
    },
    burnHours: {
        type: Number,
        required: false 
    },
    subId: {
        type: String,
        required: true,
        unique: true
    },
    synopsis: {
        type: String, 
        required: false,
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});
    const Info = mongoose.model("Info", infoSchema);
    module.exports = Info;