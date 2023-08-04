const Routes = require('express').Router();
const Order = require('../Model/Order');


Routes.post("/",(req,res)=>{
  Order.create(req.body,(err)=>{
        res.send({succeess : true,status : 200});
    });
        
});

Routes.get("/",(req,res)=>{
    Order.find({},(err,result)=>{
        res.send(result);
    });
});

Routes.get("/:id",(req,res)=>{
let id  = req.params.id
   Order.findById({_id : id},(err,result)=>{
         res.send(result);
   });
   });


Routes.delete("/:id",(req,res)=>{
let id = req.params.id;
Order.deleteOne({_id : id},(err)=>{
res.send({success : true});
});
});


Routes.put("/:id",(req,res)=>{
let id = req.params.id;
Order.updateOne({_id : id},req.body,(err)=>{
res.send({success : true});
});
});


module.exports = Routes