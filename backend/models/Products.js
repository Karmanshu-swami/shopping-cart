const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    productDesc: String,
    productPrice: Number,
    productStatus: String
})

module.exports = mongoose.model('product', productSchema)