require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGODB_URL;


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    mongoose.connect(URL);
    console.log("connection is successful");
});