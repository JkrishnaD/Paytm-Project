const express = require("express");
const app = express()
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.json())

const mainRouter = require("../backend/routes/index")

app.use("/api/v1", mainRouter);

app.listen(3000,()=>{
    console.log("server is running")
})