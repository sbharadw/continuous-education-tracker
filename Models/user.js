const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    subId: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    email: {
        type: String, 
        required: true,
    },
    hospital: {
        type :String,
        required: true,
    },
    unit: {
        type: String, 
        required: true, 
    },
    info: [
        {
            type: Schema.Types.ObjectId,
            ref: "Info",
            require: false
        }
    ]
});
const User = mongoose.model("User", UserSchema);
module.exports = User;