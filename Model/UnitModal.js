const mongoose = require('mongoose');
require('../database/Database');
const  Unit = mongoose.Schema({
    unit : [String],
    vat : [String],
    atec_code :[String]
})
module.exports = mongoose.model("unit",Unit);