const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/joke_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("CONNECTED TO THE DATABASE!"))
    .catch(err=>console.log("CANNOT CONNECT TO DATABASE!", err))