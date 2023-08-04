require('../database/Database');
const mongoose = require('mongoose');

const BrandProduct = mongoose.Schema({
    productbrand : String
})
module.exports = mongoose.model("brandproduct",BrandProduct)