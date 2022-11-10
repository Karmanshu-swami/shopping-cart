const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    adminName: String,
    adminPassword: String
})

module.exports = mongoose.model("admintable", adminSchema)