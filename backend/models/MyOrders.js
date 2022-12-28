const mongoose = require('mongoose');

const MyOrderSchema = mongoose.Schema({
    userName: String,
    productPrice: Number,
    productDesc: String,
    productQunty: Number
})

module.exports = mongoose.model('myorder', MyOrderSchema)