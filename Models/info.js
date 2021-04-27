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
        required: true
    },
    synopsis: {
        type: String, 
        required: false
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        require: true
    },
},
{
    toObject: {
    virtuals: true
    },
    toJSON: {
    virtuals: true 
    }
});

/*
//Sum creator function
function sumReducer(sum, val) {
    // Round to 2 decimal places.
    return sum + val
  }


  // totalDuration function
UserSchema.virtual("totalhours").get(function () {

  return this.info.map(info => info.courseHours).reduce(sumReducer, info[0]);
  /*
  return this.info.reduce((total, info) => {
    return total + info.courseHours;
  }, 0);

  

});

// totalDuration function
UserSchema.virtual("totalburnhours").get(function () {

  return this.info.map(info => info.burnHours).reduce(sumReducer, info[0]);
  /*
  return this.info.reduce((total, info) => {
    console.log(total + info.burnHours)
  }, 0);
 
});



UserSchema.virtual("totaltraumahours").get(function () {

   let totalhours = this.info.map(info => info.courseHours).reduce(sumReducer, 0);
   let totalburnhours = this.info.map(info => info.burnHours).reduce(sumReducer, 0);

   let totaltraumahour = totalhours - totalburnhours

    return totaltraumahour

  });


  UserSchema.virtual("totaltremaininghours").get(function () {

    this.info.map(info => info.course).reduce(sumReducer, 0);

  });

const User = mongoose.model("User", UserSchema);

*/
    const Info = mongoose.model("Info", infoSchema);
    module.exports = Info;