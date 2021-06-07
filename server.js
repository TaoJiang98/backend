const express = require('express');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

// require('dotenv').config();
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on('open', () => {
    console.log("MongoDB database connection established successfully");
})

const routes = require("./routes");
app.use("", routes);

if (process.env.NODE_ENV === 'production') {
    console.log("hi");
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})