const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser")

// Create server
const app = express();

// Connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinarian", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// Enable routing
app.use("/", routes());

app.listen(4000, () =>{
    console.log("running");
})