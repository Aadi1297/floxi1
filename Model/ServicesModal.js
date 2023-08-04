const mongoose = require('mongoose');
require('../database/Database');
const  Service = mongoose.Schema({

    description :{ type :  String ,  required : true},
    code : { type :  String ,  required : true},
    description_in_checkout : { type :  String ,  required : true},
    sale_price : { type :  Number ,  required : true},
    purchase_cost : { type :  Number ,  required : true},
    unit : { type :  String ,  required : true},
    catalog : { type :  String ,  required : true},
    vat : { type :  String ,  required : true},
    images : { type :  String ,  required : true},
    atec_code : { type :  String ,  required : true},
    sale_price_with_points : { type :  Number ,  required : true},
    number_of_points : { type :  Number ,  required : true},
    calculation_type : { type :  String ,  required : true},
    

});
module.exports = mongoose.model("service",Service);