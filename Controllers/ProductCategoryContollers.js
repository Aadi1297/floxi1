const Routes = require('express').Router();
const path = require('path');
const Rsg = require("randomstring");
const ProductCategory = require('../Model/ProductCategoryModal');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
    return cb(null,path.resolve()+'/assets/images/ProductCategory')
    },
    filename:  (req, file, cb)=> {
        let stingName = Rsg.generate({
            length: 70,
            charset: 'alphabetic'
        });
        let oldname = file.originalname.split(".")
        let newNames = stingName+"."+oldname.at(-1);
        req.body.image = newNames
        return cb(null, newNames)
    }});
  const Upload = multer({ storage });

Routes.post("/",Upload.single("image"),(req,res)=>{
if(req.body.image) {
    ProductCategory.create(req.body,(err)=>{
        res.send({success : true, status : 201, URl : {_id : 0,__v : 0, productcategory : newData.productcategory , image : "http://localhost:8080/images/ProductCategory/"+newNames}})
    });
}else{
res.send({
    success : false,
    status : 400,
    requireData : {
    productcategory : "String",
    image : "String"
}})
}});
Routes.get("/",(req,res)=>{
  ProductCategory.find({},(err,result)=>{
    result.map(c => c.image="http://localhost:8080/images/ProductCategory/"+c.image)
        res.send(result);
    });
});
Routes.get("/:id",(req,res)=>{
    let id = req.params.id;
    ProductCategory.findById({_id : id},(err,result2)=>{
     res.send(result2);
    });
});
Routes.delete("/:id",(req,res)=>{
  let id = req.params.id;
 ProductCategory.deleteOne({_id : id},(err)=>{
    res.send({success : true ,  status : 201,});
 });
});
Routes.put("/:id", Upload.single("image"),(req,res)=>{
    let id = req.params.id;
    
    ProductCategory.updateOne({_id : id},newData,(err)=>{
        res.send({success : true,  status : 201,});
    });
});

module.exports = Routes;
  



