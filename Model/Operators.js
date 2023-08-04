require('../database/Database');
const mongoose = require('mongoose');

const Operators = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    gender : String,
    city : String,
    address : String,
    specialist: String
})
module.exports = mongoose.model("operators",Operators)