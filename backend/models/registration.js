const mongoose = require('mongoose');

const reg = mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("regTable", reg)