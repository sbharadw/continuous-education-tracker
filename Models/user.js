const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    subId: {
        type: String, //look into type for this
        required: true,
    },
    employeeId: {
        type: String, //look into type for this
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: false,
    },
    email: {
        type: String, //look into type for this 
        required: true,
    },
    hospital: {
        type :String,
        required: true,
    },
    unit: {
        type: String, 
        required: true, //look into if this should be required
    },
    info: [
        {
            type: Schema.Types.ObjectId,
            ref: "Info"
        }
    ]
});
const User = mongoose.model("User", UserSchema);
module.exports = User;