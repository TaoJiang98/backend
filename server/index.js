const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

// require('dotenv').config();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const routes = require("./routes");
app.use("", routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})