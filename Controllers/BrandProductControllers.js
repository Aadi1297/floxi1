const Routes = require('express').Router();
const BrandProduct = require('../Model/BrandProduct');



Routes.post("/", (req, res)=>{
    BrandProduct.create(req.body, (err)=>{
        console.log(req.body);
        if(err){
            console.log("somthing went wrong", err);
            return;
        }
        res.send({ success : true });

    })
});

Routes.get("/", (req, res)=>{
    BrandProduct.find({}, (err, result)=>{
        if(err){
            console.log("somthing went wrong", err);
            return;
        }
        res.send({ success : true });
    })
});

Routes.get("/:id", (req, res)=>{
    const id = req.params.id;
    BrandProduct.find({_id : id}, (err, result)=>{
        if(err){
            console.log("somthing went wrong", err);
            return;
        }
        res.send(result[0]);
    })
})

Routes.put("/:id", (req, res)=>{
    const id = req.params.id;
    BrandProduct.updateMany({_id : id }, req.body, (err)=>{
        if(err){
            console.log("somthing went wrong", err);
            return;
        }
        res.send({ success : true });
    })
})

Routes.delete("/:id", (req, res)=>{
    const id = req.params.id;
    BrandProduct.deleteMany({_id : id}, (err)=>{
        if(err){
            console.log("somthing went wrong", err);
            return;
        }
        res.send({ success : true });
    })
})


    module.exports = Routes

