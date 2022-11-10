const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.connect('mongodb://127.0.0.1:27017/reactproject', () => {
    console.log("Connected to DB Successfully!");
});


app.use('/api', routes)





app.listen(5000, () => {
    console.log("Listening to port 5000");
});