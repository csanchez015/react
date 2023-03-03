const express = require("express");
const app = express();
const port = 8000;
app.use(express.json(), express.urlencoded({extended: true})); //for POST
const cors = require("cors");
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/joke.routes")(app);

app.listen(port, ()=>console.log(`RUNNING ON PORT ${port}!`));