const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
// Add routes, both API and view
app.use(routes);
// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
    mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CETList", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    );
    
    mongoose.connection.on('connected', () =>{
        console.log("Mongoose is connected")
      });
    // mongodb + srv://gabe:12345@cluster0.tgmj8.mongodb.net/reactReadingList?retryWrites=true&w=majority
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});





