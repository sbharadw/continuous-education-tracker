const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new user schema
const UserSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    subId: {
        type: String,
        required: true,
        unique: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        trim : true,
        required: true,
    },
    lastname: {
        type: String,
        trim : true,
        required: true,
    },
    role: {
        type: String,
        trim : true,
        required: false,
    },
    email: {
        type: String, 
        trim : true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    hospital: {
        type :String,
        trim : true,
        required: true,
    },
    unit: {
        type: String, 
        trim : true,
        required: true, 
    },
    info: [
        {
            type: Schema.Types.ObjectId,
            ref: "Info",
            require: true
        }
    ]
},
{
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
  });

const User = mongoose.model("User", UserSchema);
module.exports = User;