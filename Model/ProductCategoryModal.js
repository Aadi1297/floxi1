require('../database/Database');
const mongoose = require('mongoose');
const ProductCategory = mongoose.Schema({
    productcategory : { type :  String ,  required : true},
    image : { type :  String ,  required : true}
})




module.exports = mongoose.model("productcategory" ,ProductCategory)