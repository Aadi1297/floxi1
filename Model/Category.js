const mongoose = require('mongoose');
require('../database/Database');
const  Category = mongoose.Schema({
    categoryname : String,
    image : String
});
module.exports = mongoose.model("category",Category);