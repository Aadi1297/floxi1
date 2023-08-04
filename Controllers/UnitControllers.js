const routes = require('express').Router()
const Unit = require('../Model/UnitModal');

routes.post("/",(req,res)=>{
console.log(req.body)
   
Unit.find({},(err,result)=>{

    if (result.length < 1) {
        Unit.create(req.body,(err)=>{
            res.send({success : true})
        })
    }else{
        Unit.find({},(err,result)=>{
            result.forEach(i=>{
                i.unit.push(req.body.unit)
                i.vat.push(req.body.vat)
                i.atec_code.push(req.body.atec_code)
          Unit.create(i,(err)=>{
                res.send({success : true})
            })
            })
         })
    }})
});

routes.get("/",(req,res)=>{
    Unit.find({},(err,respound)=>{
        res.send(respound)
    })
});
routes.get("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.findById({_id : ids},(err,respound2)=>{
        res.send(respound2)
    })
});
routes.delete("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.deleteOne({_id : ids},(err)=>{
        res.send({success : true , status : 201,})
    })
});
routes.put("/:id",(req,res)=>{
    let ids = req.params.id;
    Unit.updateOne({_id : ids},req.body,(err)=>{
        res.send({success : true , status : 201,})
    })
});
module.exports = routes;