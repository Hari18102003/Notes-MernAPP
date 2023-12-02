const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/db");

const app = express();
const port = process.env.PORT;

// configs
app.use(cors());
app.use(bodyParser.json());

// api calls
app.use("/api/posts", require("./routes/postRoutes"));


app.get("/", function (req, res) {
    res.send("Working");
});

// MongoDB Connection
connectDB().then(() => {
    console.log("Connected to DB");
    app.listen(port, function () {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.log(err);
});