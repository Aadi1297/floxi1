require("../database/Database");
const mongoose = require('mongoose');
const Order = mongoose.Schema({
    customername : String,
    servicename : String,
    costprice : Number,
    serviceid: String,
    subtotal : Number,
    tax:Number,
    total:Number,
    paymenttype:String,
    catogoryname:String,
    quantity:Number





    // orderId:Number,
    // customername : String,
    // subtotal : Number,
    // grandtotal:Number,
    // paymenttype:String,
    // taxamount:Number,
    // catogoryname:String,
    // item :{
    // orderId:Number,
    // servicename : String,
    // costprice : Number,
    // serviceid: String,
    // quantity:Number,
    // total:Number
    // }
})





module.exports = mongoose.model("order",Order)