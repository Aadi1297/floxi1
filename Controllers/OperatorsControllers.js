const Routes = require('express').Router();
const Operators = require('../Model/Operators');

Routes.post("/",(req,res)=>{
    Operators.create(req.body,(err)=>{
        res.send({success : true , status : 200})
    })   

})
Routes.get("/",(req,res)=>{
    Operators.find({},(err,result)=>{
        res.send(result)
    })
})
module.exports = Routes