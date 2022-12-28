const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userName: String,
    productId: String,
    productQunty: Number,
    productStatus: String
})

module.exports = mongoose.model('order', orderSchema)